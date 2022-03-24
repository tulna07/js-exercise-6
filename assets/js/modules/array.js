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

const q4Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 4:</strong> Tìm số dương nhỏ nhất trong mảng.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Ban đầu, tìm phần tử dương đầu tiên trong mảng, nếu không tìm thấy thì có nghĩa là mảng không có số > 0 => trả về mặc định là -1.<br />
  <strong>- Bước 2:</strong> Nếu tìm thấy thì giữ giá trị của phần tử này và index của nó vào biến. Sau đó lặp qua mảng từ index này, nếu giá trị mỗi lần lặp bé hơn giá trị của phần tử dương bé nhất hiện tại thì cập nhật lại giá trị của phần tử dương bé nhất.<br />
  <strong>- Bước 3:</strong> Sau khi lặp qua hết mảng thì trả về số dương nhỏ nhất trong mảng, hiển thị kết quả ra màn hình.<br />`;

const q5Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 5:</strong> Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Duyệt mảng ngược từ cuối mảng lên đầu mảng.<br />
  <strong>- Bước 2:</strong> Trong lúc duyệt, nếu có phần tử nào là chẵn thì trả về phần tử này kết thúc chương trình in ra kết quả.<br />
  <strong>- Bước 3:</strong> Sau khi lặp ra hết mảng mà vẫn không có phần tử nào chẵn thì trả về -1, in kết quả.<br />`;

const q6Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 6:</strong> Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Nhận vào 2 indices, kiểm tra xem các inputs này có hợp lệ hay không, là số nguyên từ 0 tới array.length-1 thì hợp lệ. Nếu không hợp lệ thì in ra thông báo index không hợp lệ rồi kết thúc chương trình.<br />
  <strong>- Bước 2:</strong> Nếu hợp lệ, đổi 2 phần tử bằng cách dùng biến tạm.<br />
  <strong>- Bước 3:</strong> In mảng sau khi đã đổi chỗ 2 giá trị trong mảng.<br />`;

const q10Steps = `
  <i class="fa-brands fa-earlybirds position-absolute"></i>
  <strong>Array | Question 10:</strong> So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.<br />
  <strong>Các bước thực hiện (Giả sử rằng bạn đã thực hiện các bước ở hướng dẫn ban đầu): </strong><br />
  <strong>- Bước 1:</strong> Tạo 2 biến đếm giữ số lượng số âm và số lượng số dương.<br />
  <strong>- Bước 2:</strong> Lặp qua mảng, ở mỗi lần lặp xét phần tử tại lần lặp đó là số dương/ số nguyên, rồi tăng biến đếm tương ứng lên 1.<br />
  <strong>- Bước 3:</strong> Kiểm tra xem số lượng số âm lớn hơn, bé hơn hoặc bằng số dương.<br />
  <strong>- Bước 4:</strong> In ra kết quả ở bước 3 ra giao diện.<br />`;

export const qSteps = [
  q1Steps,
  q2Steps,
  q3Steps,
  q4Steps,
  q5Steps,
  q6Steps,
  ,
  ,
  ,
  q10Steps,
];

/**
 * Solutions -------------------------------------------------------------------
 */
// Question 1 =============================================================
// @Approach 1: normal for loop / forEach
// export const sumPositiveNums = arr => {
//   let result = 0;
//   for (let i = 0; i < arr.length; ++i) if (arr[i] > 0) result += arr[i];

//   return result;
// };

// @Approach 2: array reduce
export const sumPositiveNums = arr =>
  arr.reduce((cum, elem) => (elem > 0 ? (cum += elem) : cum), 0);

// Question 2 =============================================================
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

// Question 3 =============================================================
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

// Question 4 =============================================================
// @Approach 1: normal for loop / forEach
export const findMinPositive = arr => {
  // Default return
  if (arr.length === 0) return -1;

  let minPositiveIdx = 0;
  let minPositive =
    arr.find((elem, idx) => {
      minPositiveIdx = idx;
      return elem > 0;
    }) ?? -1;
  if (minPositive === -1) return minPositive;

  for (let i = minPositiveIdx; i < arr.length; ++i)
    if (arr[i] > 0 && minPositive > arr[i]) minPositive = arr[i];

  return minPositive > 0 ? minPositive : -1;
};

// @Approach 2: filter + Math.min()
// const findMinPositive = arr => Math.min(...arr.filter(elem => elem > 0));

// Question 5 =============================================================
// @Approach 1: normal for loop / forEach
export const findFinalEven = arr => {
  for (let i = arr.length - 1; i >= 0; --i) if (!(arr[i] % 2)) return arr[i];

  return -1;
};

// Sida version
// export const findFinalEven = arr => {
//   let finalEven = -1;
//   for (let i = 0; i < arr.length; ++i) if (!(arr[i] % 2)) finalEven = arr[i];

//   return finalEven;
// };

// @Approach 2: array reduce
// export const findFinalEven = arr =>
//   arr.reduce((cum, elem) => (!(elem % 2) ? elem : cum), -1);

// Question 6 =============================================================
// @Approach 1: temporary var
// export const swap2ArrElems = (arr, idx1, idx2) => {
//   const temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;

//   return arr;
// };

// @Approach 2: destructuring assignment
export const swap2ArrElems = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  return arr;
};

// @Approach 3: XOR operator - luoi lam

// Question 6 =============================================================
// @Approach 1: normal for loop / forEach
export const countPositiveNegative = arr => {
  const counter = {
    nPositive: 0,
    nNegative: 0,
  };

  for (const elem of arr) {
    if (!elem) continue;
    if (elem > 0) counter.nPositive++;
    if (elem < 0) counter.nNegative++;
  }

  return counter;
};

export const comparePositiveNegative = arr => {
  const counter = countPositiveNegative(arr);

  if (counter.nPositive > counter.nNegative)
    return `nPositive (${counter.nPositive}) > nNegative (${counter.nNegative})`;

  if (counter.nPositive < counter.nNegative)
    return `nPositive (${counter.nPositive}) < nNegative (${counter.nNegative})`;

  if (counter.nPositive === counter.nNegative)
    return `nPositive (${counter.nPositive}) === nNegative (${counter.nNegative})`;
};

/**
 * The array contains functions solving questions 1 - 10 ---------------------------------
 */
export const solArray = [
  sumPositiveNums,
  countPositives,
  findMinElem,
  findMinPositive,
  findFinalEven,
  swap2ArrElems,
  ,
  ,
  ,
  comparePositiveNegative,
];
