import { CreateElement } from "./create-element.js";

export default function Button(textContent, parent) {
  const element = CreateElement('button', {
    class: 'button',
    disabled: true
  }, textContent, parent);
  
  return element;
}