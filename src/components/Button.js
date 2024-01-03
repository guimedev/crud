import CreateElement from './CreateElement.js';

export default function Button(textContent, parent) {
  const element = CreateElement(
    'button',
    {
      class: 'button',
      disabled: true
    },
    textContent,
    parent
  );

  return element;
}
