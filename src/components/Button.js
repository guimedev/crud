import { CreateElement } from "./create-element.js";

export function Button(textContent, parent) {
  const element = CreateElement('button', {
    class: 'button',
    disabled: true
  }, textContent, parent);
  
  return element;
}