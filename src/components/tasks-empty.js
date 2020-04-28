import AbstractComponent from "./abstract-component.js";

const createTasksEmptyTemplate = () => {
  return (
    `<p class="board__no-tasks">
      Click «ADD NEW TASK» in menu to create your first task
    </p>`
  );
};

export default class TasksEmpty extends AbstractComponent {
  getTemplate() {
    return createTasksEmptyTemplate();
  }
}
