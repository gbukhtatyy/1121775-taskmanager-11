const createSortingMarkup = (code, name) => {
  return (
    `<a href="#" class="board__filter" data-sort-type="${code}">SORT BY ${name}</a>`
  );
};

export const createSortingTemplate = (sortings) => {
  const sortingssMarkup = sortings.map((it) => createSortingMarkup(it.code, it.name)).join(`\n`);

  return (
    `<div class="board__filter-list">
      ${sortingssMarkup}
    </div>`
  );
};
