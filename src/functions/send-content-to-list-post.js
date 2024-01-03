export function sendContentToListPost(listTextarea, textarea, button) {
  listTextarea.value = textarea.value;
  listTextarea.style.height = textarea.style.height 
  listTextarea.readOnly = true;

  textarea.value = '';
  textarea.style.height = '';
  textarea.style.height = `${textarea.scrollHeight + 4.4}rem`;

  button.disabled = true;
} 