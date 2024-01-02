export function savePostEdit(target, listPostButton, listPostTextarea, postTextarea) {
  if (target === listPostButton) {
    listPostButton.style.display = 'none';
    listPostTextarea.readOnly = true;
    postTextarea.disabled = false;
  }
}