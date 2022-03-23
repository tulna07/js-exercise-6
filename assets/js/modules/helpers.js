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

export const removeEmptyStrInArray = arr => arr.filter(elem => elem !== "");
