// Question 1
export const findSmallestPositiveInt = x => {
  let total = 1;
  let counter = 1;
  while (total <= x) total += ++counter;

  return counter;
};

// Question 2
export const findSumSn = (x, n) => {
  let sum = 0;
  for (let i = 1; i <= n; ++i) sum += x ** i;

  return sum;
};
