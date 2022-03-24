/**
 * Steps text ---------------------------------
 */
const q1Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 1:</strong> Tổng các số dương trong mảng.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Tạo biến để giữ giá trị được cộng dồn qua mỗi lần lặp.<br />
  <strong>- Bước 2:</strong> Lặp qua mảng, tìm những phần tử > 0 để cộng dồn vào biến ở bước 1.<br />
  <strong>- Bước 3:</strong> Sau khi lặp qua hết mảng thì trả về giá trị tổng các số dương trong mảng , hiển thị kết quả ra màn hình.<br />`;

const q2Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 2:</strong> Đếm có bao nhiêu số dương trong mảng.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Tạo biến đếm giữ giá trị được cộng dồn qua mỗi lần lặp.<br />
  <strong>- Bước 2:</strong> Lặp qua mảng, nếu phần tử tại mỗi lần lặp > 0 thì tăng biến đếm ở bước 1 thêm 1 đơn vị.<br />
  <strong>- Bước 3:</strong> Sau khi lặp qua hết mảng thì trả về số lượng số dương trong mảng , hiển thị kết quả ra màn hình.<br />`;

export const qSteps = [q1Steps, q2Steps];

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

/**
 * The array contains functions solving questions 1 - 10 ---------------------------------
 */
export const solArray = [sumPositiveNums, countPositives];
