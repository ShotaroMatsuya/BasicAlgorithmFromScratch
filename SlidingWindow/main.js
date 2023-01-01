function maxSubarraySum(arr, len) {
  // add whatever parameters you deem necessary - good luck!
  let result = null;
  if (arr.length < len) {
    console.log(arr, len, result);
    return result;
  }
  let max = 0;
  for (let i = 0; i < len; i++) {
    max += arr[i];
  }

  let tempMax = max;
  for (let j = len; j < arr.length; j++) {
    tempMax = tempMax - arr[j - len] + arr[j];
    if (tempMax > max) {
      max = tempMax;
    }
  }
  result = max;
  console.log(arr, len, result);
  return result;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

function minSubArrayLen(arr, sum) {
  let result = 0;
  let start = 0;
  let end = 0;
  let tempSum = 0;
  let arrLength = Infinity;
  while (start < arr.length) {
    if (tempSum < sum && end < arr.length) {
      tempSum += arr[end];
      end += 1;
    } else if (tempSum >= sum) {
      tempSum -= arr[start];
      start += 1;
      arrLength = Math.min(end - start + 1, arrLength);
    } else {
      break;
    }
  }
  result = arrLength === Infinity ? 0 : arrLength;
  console.log(arr, sum, result);
  return result;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let finder = {};
  let result = 0;
  if (str.length === 0) {
    result = maxLength;
    console.log(str, result);
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (finder[letter]) {
      start = Math.max(start, finder[letter]);
    }
    maxLength = Math.max(maxLength, i - start + 1);
    finder[letter] = i + 1;
  }
  result = maxLength;
  console.log(str, result);
  return result;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6
