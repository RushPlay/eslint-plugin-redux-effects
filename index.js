module.exports = {
  rules: {
    'no-redundant-dispatch': {
      meta: {
        docs: {
          description: 'Disallow redundant dispatch in callbacks',
          category: 'Possible Errors',
          recommended: true,
        },
      },
      create: function(context) {
        return {
          CallExpression(node) {
            if (
              node.callee.type === 'Identifier' &&
              node.callee.name === 'dispatch' &&
              node.parent.type === 'ArrowFunctionExpression' &&
              node.parent.parent.type === 'Property' &&
              node.parent.parent.key.type === 'Identifier' &&
              (node.parent.parent.key.name === 'success' ||
                node.parent.parent.key.name === 'failure')
            ) {
              context.report(node, 'Do not use dispatch inside effect callback')
            }
          },
        }
      },
    },
  },
}
