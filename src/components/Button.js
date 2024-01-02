import { CreateElement } from "./CreateElement.js";

export function Button(textContent, parent) {
  const element = CreateElement('button', {
    class: 'button',
    disabled: true
  }, textContent, parent);
  
  return element;
}