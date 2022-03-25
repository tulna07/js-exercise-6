/**
 * General helpers ---------------------------------
 */

// Random number from min to below max
// - Ex: getRandomNumber(-10, 10) get a number: -10 <= number < 10;
const getRandomNumber = (min, max) => min + Math.random() * (max - min);

// Check whether input with a single number is invalid or not
// - invalid: NaN, negative and other conditions based on callback
export const isInvalidNumber = (input, fn = para => true) => {
  if (Number.isNaN(input) || input < 0 || !fn(input)) {
    return true;
  }

  return false;
};

// Check prime number
// @Approach 1:
export const isPrime = number => {
  if (number === 2) return true;

  if (number < 2 || !(number % 2)) return false;

  for (let i = 3; i < number; i += 2) if (!(number % i)) return false;

  return true;
};

// @Approach 2:
// export const isPrime = number => {
//   if (number === 2) return true;

//   if (!(number % 2) || number < 2) return false;

//   const numberSqrt = Math.sqrt(number);
//   for (let i = 3; i <= numberSqrt; i += 2) if (!(number % i)) return false;

//   return true;
// };

/**
 * Array helpers ---------------------------------
 */

// Check whether array is invalid or not
// - invalid: array with at least a element is not a number
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
