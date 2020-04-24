const generateFilters = () => {
  return [{
    title: `all`,
    count: 42
  }, {
    title: `overdue`,
    count: 18
  }, {
    title: `today`,
    count: 18
  }, {
    title: `favorites`,
    count: 18
  }, {
    title: `repeating`,
    count: 18
  }, {
    title: `archive`,
    count: 18
  }];
};

export {generateFilters};
