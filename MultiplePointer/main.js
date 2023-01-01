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

function averagePair(arr, target) {
  let result = false;
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 0) {
    console.log(arr, target, result);
    return result;
  }
  while (left < right) {
    let avg = arr[left] + arr[right] / 2;
    if (avg === target) {
      result = true;
      console.log(arr, target, result);
      return result;
    } else if (avg > target) {
      right--;
    } else {
      left++;
    }
  }
  console.log(arr, target, result);
  return result;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  let result = false;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      result = true;
      console.log(str1, str2, result);
      return result;
    }
    j++;
  }
  console.log(str1, str2, result);
  return result;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
