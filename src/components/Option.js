import CreateElement from './CreateElement.js';

export default function Option(textContent, parent) {
  const el = CreateElement(
    'button',
    {
      class: 'option'
    },
    textContent,
    parent
  );

  return el;
}
