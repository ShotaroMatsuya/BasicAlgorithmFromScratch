function linearSearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val === target) return i;
  }
  return result;
}

let test1 = linearSearch([10, 15, 20, 25, 30], 15); // 1
let test2 = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
let test3 = linearSearch([100], 100); // 0
let test4 = linearSearch([1, 2, 3, 4, 5], 6); // -1
let test5 = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
let test6 = linearSearch([100], 200); // -1

console.log(test1, test2, test3, test4, test5, test6);

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end - start) / 2);
  let result = -1;

  while (start <= middle && middle < end) {
    if (arr[middle] < num) {
      start = middle;
      middle = start + Math.floor((end - start) / 2);
    }
    if (arr[middle] > num) {
      end = middle;
      middle = start + Math.floor((end - start) / 2);
    }
    if (arr[middle] == num) return middle;
    if (start === middle) {
      middle = end;
      if (arr[middle] == num) return middle;
    }
  }
  return result;
}
let test0 = binarySearch([1, 2, 3, 4, 5], 1); //0
test1 = binarySearch([1, 2, 3, 4, 5], 2); // 1
test2 = binarySearch([1, 2, 3, 4, 5], 3); // 2
test3 = binarySearch([1, 2, 3, 4, 5], 5); // 4
test4 = binarySearch([1, 2, 3, 4, 5], 6); // -1
test5 = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
); // 2
test6 = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
let test7 = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1

console.log(test0, test1, test2, test3, test4, test5, test6, test7);
