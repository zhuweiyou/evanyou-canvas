declare function evanyouCanvas(
  parentElement: HTMLElement | string,
  documentClick?: boolean
): {
  element: HTMLElement;
  update: Function;
};

export = evanyouCanvas;
