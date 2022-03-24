const getRandomNumber = (min, max) => min + Math.random() * (max - min);

/**
 * Loop helpers ---------------------------------
 */
// @Check whether input with a single number is invalid or not
export const isInvalidNumber = (input, fn = para => true) => {
  if (Number.isNaN(input) || input < 0 || !fn(input)) {
    return true;
  }

  return false;
};

/**
 * Array helpers ---------------------------------
 */
// @Check whether array is invalid or not
//  invalid: array with at least a element is not a number
export const isInvalidArray = arr =>
  arr.find(elem => Number.isNaN(+elem)) ?? false;

export const processArray = arr =>
  arr.filter(elem => elem !== "").map(elem => +elem);

// Get an array with size 10, each element is a number range from -10 to below 10
export const getArraySize10 = () => {
  const array = [];
  for (let i = 0; i < 10; ++i) array.push(Math.floor(getRandomNumber(-10, 10)));

  return array;
};
