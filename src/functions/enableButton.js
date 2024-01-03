export function enableButton(textarea, button) {

    button.disabled = true;

    if (textarea.value.length > 0) {
      button.disabled = false;
    }

}