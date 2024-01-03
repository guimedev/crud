import CreateElement from './CreateElement.js';
import { textarea, button } from '../../index.js';

import { enableButton } from '../functions/enableButton.js';

export default function Textarea(placeHolder, parent) {
  const element = CreateElement(
    'textarea',
    {
      class: 'textarea',
      maxLength: 280,
      placeHolder: placeHolder
    },
    null,
    parent
  );

  element.addEventListener('input', () => {
    element.style.height = '';
    element.style.height = `${element.scrollHeight + 4.4}rem`;

    enableButton(textarea, button);
  });

  return element;
}
