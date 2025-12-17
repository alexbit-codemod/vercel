/**
 * jscodeshift codemod: console.log(...) -> logger.log(...)
 *
 * Usage:
 *   npx jscodeshift -t utils/codemods/console-log-to-logger-log.js <path> --extensions=js,jsx,ts,tsx
 *
 * Notes:
 * - Only rewrites call sites (e.g. `console.log('x')`), not references (e.g. `const x = console.log`).
 * - Skips transforms when `console` is shadowed by a local binding in scope.
 */
module.exports = function transform(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  let didChange = false;
 
  function isShadowedConsole(path) {
    const scope = path.scope && path.scope.lookup && path.scope.lookup('console');
    return Boolean(scope && scope.declares && scope.declares('console'));
  }
 
  function isConsoleIdentifier(node) {
    return node && node.type === 'Identifier' && node.name === 'console';
  }
 
  function isLogProperty(memberExpr) {
    if (!memberExpr || !memberExpr.property) return false;
 
    const prop = memberExpr.property;
    if (memberExpr.computed) {
      // Support console['log'](...) / console["log"](...)
      if (prop.type === 'Literal') return prop.value === 'log';
      if (prop.type === 'StringLiteral') return prop.value === 'log';
      return false;
    }
 
    return prop.type === 'Identifier' && prop.name === 'log';
  }
 
  function isMemberExpression(node) {
    return (
      node &&
      (node.type === 'MemberExpression' ||
        node.type === 'OptionalMemberExpression' ||
        // Some parsers represent optional chaining as MemberExpression with `optional: true`
        (node.type === 'MemberExpression' && node.optional === true))
    );
  }
 
  function buildLoggerDotLogLike(originalMemberExpr) {
    const next = j.memberExpression(j.identifier('logger'), j.identifier('log'), false);
    // Preserve optional chaining flag if present.
    if (originalMemberExpr && Object.prototype.hasOwnProperty.call(originalMemberExpr, 'optional')) {
      next.optional = originalMemberExpr.optional;
    }
    return next;
  }
 
  function rewriteCallExpression(path) {
    if (isShadowedConsole(path)) return;
 
    const node = path.node;
    if (!node || !node.callee) return;
 
    // Unwrap ChainExpression (ESTree) if present.
    const calleeWrapper = node.callee;
    const callee = calleeWrapper && calleeWrapper.type === 'ChainExpression'
      ? calleeWrapper.expression
      : calleeWrapper;
 
    if (!isMemberExpression(callee)) return;
    if (!isConsoleIdentifier(callee.object)) return;
    if (!isLogProperty(callee)) return;
 
    const nextMember = buildLoggerDotLogLike(callee);
 
    if (calleeWrapper.type === 'ChainExpression') {
      node.callee.expression = nextMember;
    } else {
      node.callee = nextMember;
    }
 
    didChange = true;
  }
 
  root.find(j.CallExpression).forEach(rewriteCallExpression);
 
  // OptionalCallExpression exists in some parser modes (Babel AST).
  if (typeof j.OptionalCallExpression === 'function') {
    root.find(j.OptionalCallExpression).forEach(rewriteCallExpression);
  }
 
  return didChange ? root.toSource({ quote: 'single' }) : null;
};
 
module.exports.parser = 'tsx';

