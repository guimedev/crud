export function enableOptionsWrapperDisplay(target, menuIcon, bar1, bar2, bar3, wrapperOptions) {
  if (
    target === menuIcon || 
    target === bar1 || 
    target === bar2 || 
    target === bar3
  ) {
    if (wrapperOptions.style.display === 'none') {
      wrapperOptions.style.display = 'grid';
    } else {
      wrapperOptions.style.display = 'none';
    }
  } else {
    wrapperOptions.style.display = 'none';
  } 
}