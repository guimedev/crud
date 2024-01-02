export function removeListPost(target, deleteOpt, confirm, cancel, popup, element, body) {
  if (target === deleteOpt) {
    popup.style.display = 'grid';
    body.style.overflowY = 'hidden';
  }

  if (target === confirm) {
    element.remove();
    popup.style.display = 'none';
    body.style.overflowY = 'visible';
  }

  if (target === cancel) {
    popup.style.display = 'none';
    body.style.overflowY = 'visible';
  }
}