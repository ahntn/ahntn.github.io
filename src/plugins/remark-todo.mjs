/**
 * Renders any paragraph that starts with "TODO:" as a loud, visible box.
 * The production build is separately failed by scripts/check-todos.mjs.
 */
function textOf(node) {
  if (typeof node.value === 'string') {
    return node.value;
  }
  if (Array.isArray(node.children)) {
    return node.children.map(textOf).join('');
  }
  return '';
}

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function walk(node) {
  if (!Array.isArray(node.children)) {
    return;
  }
  node.children = node.children.map(function mapChild(child) {
    if (child.type === 'paragraph' && textOf(child).trim().startsWith('TODO:')) {
      return {
        type: 'html',
        value: `<p class="todo-box" data-todo>${escapeHtml(textOf(child).trim())}</p>`,
      };
    }
    walk(child);
    return child;
  });
}

export function remarkTodo() {
  return function transform(tree) {
    walk(tree);
  };
}
