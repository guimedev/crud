import { CreateElement } from './create-element.js';
import { Option } from './option.js';

export default function Popup() {
  const element = CreateElement('div', { class: 'popup' }, null, document.body);
  const card = CreateElement('div', { class: 'popup-card' }, null, element);
  const para = CreateElement(
    'p',
    { class: 'popup-question' },
    'Realmente deseja excluir o post?',
    card
  );
  const wrapperOptions = CreateElement(
    'div',
    { class: 'popup-options-wrapper' },
    null,
    card
  );
  const confirm = Option('confirmar', wrapperOptions);
  const cancel = Option('cancelar', wrapperOptions);

  return element;
}
