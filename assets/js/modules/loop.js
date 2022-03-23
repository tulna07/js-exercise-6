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

// Question 3
// @Approach 1: recursive
export const recursiveFactorial = n =>
  n <= 1 ? 1 : n * recursiveFactorial(n - 1);

// @Approach 2: loop
export const loopFactorial = n => {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; ++i) result *= i;

  return result;
};
