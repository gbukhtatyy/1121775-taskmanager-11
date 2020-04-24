import {MONTH_NAMES} from "./const";

/**
 * Получение числа с 0 впереди если value < 10
 * @param {number} value
 * @return {string}
 */
const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : value;
};

/**
* Получение случайного числа в заданном диапозоне
*
* @param {number} max максимальное значение
* @param {number} min минимальное значение
* @return {number} случайное значение в заданных диапозонах
*/
export const getRandomInt = (max, min) => {
  max = max ? max : 2;
  min = min ? min : 0;

  return Math.floor(Math.random() * Math.floor(max - min)) + min;
};

/**
 * Получение случайного элемента из массива
 * @param {Array} array
 * @return {*} случайных элемент массива
 */
export const getRandomElementArray = (array) => {
  return array[getRandomInt(array.length)];
};

/**
 * Получение перемешанного массива
 * @param {Array} array исходный массив
 * @return {Array} перемешанный массив
 */
export const shuffleArray = (array) => {
  return array.slice(0).sort(function () {
    return Math.random() - 0.5;
  });
};

/**
 * Получение amount случайных элементов из массива array
 * @param {Array} array исходный массив
 * @param {number} amount кол-во случайных элементов
 * @return {Array} массив случайных элементов из массива array
 */
export const getRandomElementsArray = (array, amount) => {
  return shuffleArray(array).slice(0, amount);
};

/**
 * Получение случайной даты
 * @return {Date}
 */
export const getRandomDate = () => {
  const tarrgetDate = new Date();
  const sign = getRandomInt() ? 1 : -1;
  const diffValue = sign * getRandomInt(0,8);

  tarrgetDate.setDate(tarrgetDate.getDate() + diffValue);

  return tarrgetDate;
};

/**
 * Получение отформатированого даты из Date
 * @param {Date} date
 * @return {string}
 */
export const formatDate = (date) => {
  return (`${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`);
};

/**
 * Получение отформатированого времени из Date
 * @param {Date} date
 * @return {string}
 */
export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};
