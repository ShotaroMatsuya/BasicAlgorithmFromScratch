function countUniqueValues(arr) {
  let uniqueArr = [];
  let result = 0;
  if (arr.length === 0) {
    console.log(uniqueArr, result);
    return result;
  }
  let curValue;
  for (let i = 0; i < arr.length; i++) {
    if (curValue !== arr[i]) {
      uniqueArr.push(arr[i]);
      curValue = arr[i];
    }
  }
  result = uniqueArr.length;
  console.log(uniqueArr, result);
  return result;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
