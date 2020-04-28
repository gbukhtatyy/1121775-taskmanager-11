export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

/**
 * Create a Dom Element Based on a Template
 * @param {String} template
 * @return {Element}
 */
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

/**
 * Rendering element to container
 * @param {Element} container
 * @param {AbstractComponent} component
 * @param {string} place
 */
export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

/**
 * Replace oldElement to newElement in parent
 * @param {AbstractComponent} newComponent
 * @param {AbstractComponent} oldComponent
 */
export const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

/**
 * Remove component with element
 * @param {AbstractComponent} component
 */
export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};
