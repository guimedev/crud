import { CreateElement } from "./CreateElement.js";
import { Textarea } from "./Textarea.js";
import { Button } from "./Button.js";
import { MenuIcon } from "./MenuIcon.js";
import { Option } from "./Option.js";
import { Popup } from "./PopUp.js";
import { textarea, button } from "../../index.js";

import { sendContentToListPost } from "../functions/sendContentToListPost.js";
import { enableOptionsWrapperDisplay } from "../functions/enableOptionsWrapperDisplay.js";
import { enableMenuIconBackgroundColor } from "../functions/enableMenuIconBackgroundColor.js";
import { editListPostTextarea } from "../functions/editListPostTextarea.js";
import { savePostEdit } from "../functions/savePostEdit.js";
import { removeListPost } from "../functions/removeListPost.js";
import { enableButton } from "../functions/enableButton.js";

export function ListPostCard() {
  const element = CreateElement('li', { class: 'post-card' });
  const resources = CreateElement('div', { class:'resources' }, null, element);
  const wrapperMenu = CreateElement('div', { class:'wrapper-menu' }, null, resources);
  const menuIcon = MenuIcon(wrapperMenu);
  const wrapperOptions = CreateElement('div', { class: 'wrapper-options' }, null, wrapperMenu);
  const editOpt = Option('editar', wrapperOptions);
  const deleteOpt = Option('excluir', wrapperOptions);
  const popup = Popup()
  const listTextarea = Textarea('', element);
  const listButton = Button('Postar', element);
  const { body } = document;
  const [ bar1, bar2, bar3 ] = menuIcon.children;
  const [ card ] = popup.children
  const [ , options ] = card.children;
  const [ confirm, cancel ] = options.children;

  sendContentToListPost(listTextarea, textarea, button);

  body.addEventListener('click', (event) => {
    enableOptionsWrapperDisplay(event.target, menuIcon, bar1, bar2, bar3, wrapperOptions);
    enableMenuIconBackgroundColor(wrapperOptions, menuIcon);
    editListPostTextarea(event.target, editOpt, listTextarea, listButton, textarea);
    savePostEdit(event.target, listButton, listTextarea, textarea);
    removeListPost(event.target, deleteOpt, confirm, cancel, popup, element, body);
  });

  listTextarea.addEventListener('input', () => {
    enableButton(listTextarea, listButton);
  });

  return element;
}