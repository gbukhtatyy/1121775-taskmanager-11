import AbstractComponent from "./abstract-component.js";

export const SortType = {
  DATE_UP: `date-up`,
  DATE_DOWN: `date-down`,
  DEFAULT: `default`,
};

const SORT_ITEMS = [{
  code: SortType.DEFAULT,
  name: `DEFAULT`
}, {
  code: SortType.DATE_UP,
  name: `DATE up`
}, {
  code: SortType.DATE_DOWN,
  name: `DATE down`
}];

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

export default class Sort extends AbstractComponent {
  constructor() {
    super();

    this._items = SORT_ITEMS;
    this._currentSortType = SortType.DEFAULT;
  }

  getTemplate() {
    return createSortingTemplate(this._items);
  }

  getSortType() {
    return this._currentSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();

      if (evt.target.tagName !== `A`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;

      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;

      handler(this._currentSortType);
    });
  }
}
