export function CreateElement(elementName, attributes, textContent = null, parent = null) {
  const element = document.createElement(elementName);
  const attrAsArray = Object.entries(attributes);

  attrAsArray.forEach(([ key, value ]) => element.setAttribute(key, value));

  if (textContent) {
    element.textContent = textContent;
  }

  if (parent) {
    parent.append(element);
  }

  return element;
}