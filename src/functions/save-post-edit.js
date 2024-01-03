export function savePostEdit(target, listPostButton, listPostTextarea, postTextarea, allMenuIcons) {
  if (target === listPostButton) {
    listPostButton.style.display = 'none';
    listPostTextarea.readOnly = true;
    postTextarea.disabled = false;

    allMenuIcons.forEach((menuIcon) => menuIcon.disabled = false);
  }
}