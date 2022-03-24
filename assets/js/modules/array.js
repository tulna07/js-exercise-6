/**
 * Steps text ---------------------------------
 */
const q1Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 1:</strong> Tổng các số dương trong mảng.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Tạo biến để giữ giá trị được cộng dồn qua mỗi lần lặp.<br />
  <strong>- Bước 2:</strong> Lặp qua mảng, tìm những phần tử > 0 để cộng dồn vào biến ở bước 1.<br />
  <strong>- Bước 3:</strong> Sau khi lặp qua hết mảng thì trả về giá trị tổng các số dương trong mảng, hiển thị kết quả ra màn hình.<br />`;

const q2Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 2:</strong> Đếm có bao nhiêu số dương trong mảng.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Tạo biến đếm giữ giá trị được cộng dồn qua mỗi lần lặp.<br />
  <strong>- Bước 2:</strong> Lặp qua mảng, nếu phần tử tại mỗi lần lặp > 0 thì tăng biến đếm ở bước 1 thêm 1 đơn vị.<br />
  <strong>- Bước 3:</strong> Sau khi lặp qua hết mảng thì trả về số lượng số dương trong mảng, hiển thị kết quả ra màn hình.<br />`;

const q3Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 3:</strong> Tìm số nhỏ nhất trong mảng.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Ban đầu, giả sử phần tử đầu tiên là giá trị nhỏ nhất trong mảng, gán giá trị này vào một biến.<br />
  <strong>- Bước 2:</strong> Lặp qua mảng, nếu phần tử tại mỗi lần lặp < giá trị biến ở bước 1 thì cập nhật lại biến này.<br />
  <strong>- Bước 3:</strong> Sau khi lặp qua hết mảng thì trả về số bé nhất trong mảng, hiển thị kết quả ra màn hình.<br />`;

export const qSteps = [q1Steps, q2Steps, q3Steps];

/**
 * Solutions ---------------------------------
 */
// Question 1
// @Approach 1: normal for loop / forEach
// export const sumPositiveNums = arr => {
//   let result = 0;
//   for (let i = 0; i < arr.length; ++i) if (arr[i] > 0) result += arr[i];

//   return result;
// };

// @Approach 2: array reduce
export const sumPositiveNums = arr =>
  arr.reduce((cum, elem) => (elem > 0 ? (cum += elem) : cum), 0);

// Question 2
// @Approach 1:  normal for loop / forEach
// export const countPositives = arr => {
//   let counter = 0;
//   arr.forEach(elem => {
//     if (elem > 0) counter++;
//   });

//   return counter;
// };

// @Approach 2: array reduce
export const countPositives = arr =>
  arr.reduce((cum, elem) => (elem > 0 ? ++cum : cum), 0);

// @Approach 3: array filter
// export const countPositives = arr => arr.filter(elem => elem > 0).length;

// Question 3
// @Approach 1:  normal for loop / forEach
// export const findMinElem = arr => {
//   // Default return
//   if (arr.length === 0) return -1;

//   if (arr.length === 1) return arr[0];

//   let minElem = arr[0];
//   for (let i = 1; i < arr.length; ++i) if (minElem > arr[i]) minElem = arr[i];

//   return minElem;
// };

// @Approach 2: array reduce
export const findMinElem = arr =>
  arr.reduce(
    (minElem, curElem) => (minElem > curElem ? curElem : minElem),
    arr[0]
  );

// @Approach 3: Math.min + Spread Operator
// export const findMinElem = arr => Math.min(...arr);

/**
 * The array contains functions solving questions 1 - 10 ---------------------------------
 */
export const solArray = [sumPositiveNums, countPositives, findMinElem];
