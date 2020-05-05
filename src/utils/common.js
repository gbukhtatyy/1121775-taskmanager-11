import moment from "moment";

/**
* Getting a random number in a given range
*
* @param {number} max maximum value
* @param {number} min minimum value
* @return {number} random value in given range
*/
export const getRandomInt = (max, min) => {
  max = max ? max : 2;
  min = min ? min : 0;

  return Math.floor(Math.random() * Math.floor(max - min)) + min;
};

/**
 * Getting a random element from an array
 * @param {Array} array
 * @return {*} случайных элемент массива
 */
export const getRandomElementArray = (array) => {
  return array[getRandomInt(array.length)];
};

/**
 * Getting a mixed array
 * @param {Array} array source array
 * @return {Array} mixed array
 */
export const shuffleArray = (array) => {
  return array.slice(0).sort(function () {
    return Math.random() - 0.5;
  });
};

/**
 * Getting amount of random elements from array
 * @param {Array} array source array
 * @param {number} amount number of random elements
 * @return {Array} array of random elements from an array
 */
export const getRandomElementsArray = (array, amount) => {
  return shuffleArray(array).slice(0, amount);
};

/**
 * Getting a random date
 * @return {Date}
 */
export const getRandomDate = () => {
  const tarrgetDate = new Date();
  const sign = getRandomInt() ? 1 : -1;
  const diffValue = sign * getRandomInt(0, 8);

  tarrgetDate.setDate(tarrgetDate.getDate() + diffValue);

  return tarrgetDate;
};

/**
 * Getting formatted date from Date
 * @param {Date} date
 * @return {string}
 */
export const formatDate = (date) => {
  return moment(date).format(`DD MMMM`);
};

/**
 * Getting formatted time from Date
 * @param {Date} date
 * @return {string}
 */
export const formatTime = (date) => {
  return moment(date).format(`hh:mm`);
};
