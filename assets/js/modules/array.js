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

export const qSteps = [q1Steps];

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

// The array contains functions solving questions 1 - 10
export const solArray = [sumPositiveNums];
