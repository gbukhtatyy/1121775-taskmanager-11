import AbstractComponent from "./abstract-component.js";

const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export default class LoadMoreButton extends AbstractComponent {
  constructor(menuItems) {
    super();

    this._menuItems = menuItems;
  }

  getTemplate() {
    return createLoadMoreButtonTemplate(this._menuItems);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
