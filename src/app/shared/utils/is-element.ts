function isElement(target) {
  return typeof HTMLElement === 'object'
    ? target instanceof HTMLElement
    : target &&
        typeof target === 'object' &&
        target !== null &&
        target.nodeType === 1 &&
        typeof target.nodeName === 'string';
}
