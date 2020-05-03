declare function evanyouCanvas(
  parentElement: HTMLElement | string,
  documentClick?: true
): {
  element: HTMLElement;
  update: Function;
};

export = evanyouCanvas;
