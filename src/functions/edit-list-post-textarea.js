export function editListPostTextarea(target, editOpt, listTextarea, listButton, Textarea, allMenuIcons) {
  if (target === editOpt) {
    listTextarea.readOnly = false;
    listButton.style.display = 'block';
    listButton.disabled = false;
    Textarea.disabled = true;
    
    allMenuIcons.forEach((menuIcon) => menuIcon.disabled = true);
  }
}