// Question 1
export const findSmallestPositiveInt = x => {
  let total = 1;
  let counter = 1;
  while (total <= x) total += ++counter;

  return counter;
};
