import { CreateElement } from "./CreateElement.js";

export function Option(textContent, parent) {
  const el = CreateElement('button', {
    class: 'option'
  }, textContent, parent);

  return el;
}