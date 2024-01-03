import { CreateElement } from "./create-element.js";

export function MenuIcon(parent) {
  const element = CreateElement(
    'button', 
    { class: 'menu-icon'},
    null,
    parent
  );

  function Bar() {
    return CreateElement(
      'div',
      { class: 'bar' },
      null,
      element
    );
  }

  Bar();
  Bar();
  Bar();

  return element;
}