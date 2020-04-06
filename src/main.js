import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createSortingTemplate} from "./components/sorting.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = document.querySelector(`.board`);
const boardContentElement = document.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(boardContentElement, createTaskTemplate(), `beforeend`);
}

render(boardContentElement, createTaskEditTemplate(), `beforeend`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
