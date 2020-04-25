import {SITE_MENU_ITEMS} from "../const.js";
import {createElement} from "../utils.js";

const createSiteMenuMarkup = (item, isChecked) => {
  const {code, name} = item;
  return (
    `<input
        type="radio"
        name="control"
        id="control__${code}"
        class="control__input visually-hidden"
        ${isChecked ? `checked` : ``}
    />
    <label for="control__${code}" class="control__label control__label--${code}">${name}</label>`
  );
};

const createSiteMenuTemplate = (menuItems) => {
  const siteMenuMarkup = menuItems.map((it, i) => createSiteMenuMarkup(it, i === 1)).join(`\n`);

  return (
    `<section class="control__btn-wrap">
      ${siteMenuMarkup}
    </section>`
  );
};

export default class SiteMenu {
  constructor() {
    this._menuItems = SITE_MENU_ITEMS;

    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._menuItems);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
