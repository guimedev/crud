import { CreateElement } from './create-element.js';
import { Textarea } from './textarea.js';
import { Button } from './button.js';
import { MenuIcon } from './menu-icon.js';
import { Option } from './option.js';
import { Popup } from './popup.js';
import { textarea, button } from '../../index.js';

import { sendContentToListPost } from '../functions/send-content-to-list-post.js';
import { enableOptionsWrapperDisplay } from '../functions/enable-options-wrapper-display.js';
import { enableMenuIconBackgroundColor } from '../functions/enable-menu-icon-background-color.js';
import { editListPostTextarea } from '../functions/edit-list-post-textarea.js';
import { savePostEdit } from '../functions/save-post-edit.js';
import { removeListPost } from '../functions/remove-list-post.js';
import { enableButton } from '../functions/enable-button.js';

const { body } = document;

export function ListPostCard() {
  const element = CreateElement('li', { class: 'post-card' });
  const resources = CreateElement('div', { class: 'resources' }, null, element);
  const wrapperMenu = CreateElement(
    'div',
    { class: 'wrapper-menu' },
    null,
    resources
  );
  const menuIcon = MenuIcon(wrapperMenu);
  const wrapperOptions = CreateElement(
    'div',
    { class: 'wrapper-options' },
    null,
    wrapperMenu
  );
  const editOpt = Option('editar', wrapperOptions);
  const deleteOpt = Option('excluir', wrapperOptions);
  const popup = Popup();
  const listTextarea = Textarea('', element);
  const listButton = Button('salvar', element);

  const [bar1, bar2, bar3] = menuIcon.children;
  const [card] = popup.children;
  const [, options] = card.children;
  const [confirm, cancel] = options.children;

  sendContentToListPost(listTextarea, textarea, button);

  body.addEventListener('click', (event) => {
    const allMenuIcons = document.querySelectorAll('.menu-icon');

    enableOptionsWrapperDisplay(
      event.target,
      menuIcon,
      bar1,
      bar2,
      bar3,
      wrapperOptions
    );
    enableMenuIconBackgroundColor(wrapperOptions, menuIcon);
    editListPostTextarea(
      event.target,
      editOpt,
      listTextarea,
      listButton,
      textarea,
      allMenuIcons
    );
    savePostEdit(
      event.target,
      listButton,
      listTextarea,
      textarea,
      allMenuIcons
    );
    removeListPost(
      event.target,
      deleteOpt,
      confirm,
      cancel,
      popup,
      element,
      body
    );
  });

  listTextarea.addEventListener('input', () => {
    enableButton(listTextarea, listButton);
  });

  return element;
}
