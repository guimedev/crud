export function editListPostTextarea(target, editOpt, listPostTextarea, listPostButton, postTextarea) {
  if (target === editOpt) {
    listPostTextarea.readOnly = false;
    listPostButton.style.display = 'block';
    listPostButton.disabled = false;
    postTextarea.disabled = true;
  }
}