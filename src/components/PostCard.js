import { CreateElement } from "./CreateElement.js";

export function PostCard(parent) {
  const element = CreateElement(
    'div',
    { class: 'post-card' },
    null,
    parent
  );

  return element;
}