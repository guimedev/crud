import { CreateElement } from "./create-element.js";

export function Option(textContent, parent) {
  const el = CreateElement('button', {
    class: 'option'
  }, textContent, parent);

  return el;
}