// Import components
import SiteMenuComponent from "./components/site-menu.js";
import FilterComponent from "./components/filter.js";
import BoardComponent from "./components/board.js";

// Import controllers
import BoardController from "./controllers/board.js";

// Import constants and utils
import {RenderPosition, render} from "./utils/render.js";

// Import mocks
import {generateFilters} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";

// Define constants
const TASK_COUNT = 22;

// Define data
const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

// Define containers
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

// Render
render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
