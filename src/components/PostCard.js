import CreateElement from './CreateElement.js';

export default function PostCard(parent) {
  const element = CreateElement('div', { class: 'post-card' }, null, parent);

  return element;
}
