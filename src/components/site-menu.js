import AbstractComponent from "./abstract-component.js";
import {SITE_MENU_ITEMS} from "../const.js";

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

export default class SiteMenu extends AbstractComponent {
  getTemplate() {
    return createSiteMenuTemplate(SITE_MENU_ITEMS);
  }
}
