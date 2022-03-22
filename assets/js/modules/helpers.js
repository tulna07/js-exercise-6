// Check input is invalid or not
export const isInvalid = (input, fn = para => true) => {
  if (Number.isNaN(input) || input < 0 || !fn(input)) {
    return true;
  }

  return false;
};
