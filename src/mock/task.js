import {COLORS} from "../const.js";
import {getRandomInt, getRandomElementArray, getRandomDate} from "../utils/common.js";

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`
];

const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {"mo": getRandomInt()});
};

const generateTask = () => {
  const dueDate = getRandomInt() ? null : getRandomDate();

  return {
    description: getRandomElementArray(DescriptionItems),
    dueDate,
    repeatingDays: generateRepeatingDays(),
    color: getRandomElementArray(COLORS),
    isArchive: getRandomInt(),
    isFavorite: getRandomInt()
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
