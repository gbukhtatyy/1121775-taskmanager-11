import {SORT_ITEMS} from "../const.js";
import {createElement} from "../utils.js";


const createSortingMarkup = (code, name) => {
  return (
    `<a href="#" class="board__filter" data-sort-type="${code}">SORT BY ${name}</a>`
  );
};

const createSortingTemplate = (sortings) => {
  const sortingssMarkup = sortings.map((it) => createSortingMarkup(it.code, it.name)).join(`\n`);

  return (
    `<div class="board__filter-list">
      ${sortingssMarkup}
    </div>`
  );
};

export default class Sort {
  constructor() {
    this._items = SORT_ITEMS;

    this._element = null;
  }

  getTemplate() {
    return createSortingTemplate(this._items);
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
