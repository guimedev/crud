export function enableMenuIconBackgroundColor(wrapperOptions, menuIcon) {
  if (wrapperOptions.style.display === 'grid') {
    menuIcon.style.backgroundColor = '#97deff';
  } else {
    menuIcon.style.backgroundColor = '#87cefa';
  }
}