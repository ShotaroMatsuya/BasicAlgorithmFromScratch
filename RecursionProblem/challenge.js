function reverse(str) {
  let length = str.length;
  if (length === 0) return '';
  let slicedString = str.slice(0, -1);
  return str[length - 1] + reverse(slicedString);
}

let test1 = reverse('awesome'); // 'emosewa'
let test2 = reverse('rithmschool'); // 'loohcsmhtir'

console.log(test1, test2);

function isPalindrome(str) {
  let backward = '';
  function helper(processedStr) {
    if (processedStr.length === 0) return '';
    const slicedString = processedStr.slice(0, -1);
    return processedStr[processedStr.length - 1] + helper(slicedString);
  }
  backward = helper(str);

  return str === backward;
}

test1 = isPalindrome('awesome'); // false
test2 = isPalindrome('foobar'); // false
let test3 = isPalindrome('tacocat'); // true
let test4 = isPalindrome('amanaplanacanalpanama'); // true
let test5 = isPalindrome('amanaplanacanalpandemonium'); // false

console.log(test1, test2, test3, test4, test5);

function someRecursive(arr, cb) {
  let results = [];
  function helper(processedArr, results) {
    if (processedArr.length === 0) return [];
    const [el] = processedArr.splice(0, 1);
    results.push(cb(el));
    return helper(processedArr, results);
  }
  helper(arr, results);
  return results.includes(true);
}

const isOdd = val => val % 2 !== 0;

test1 = someRecursive([1, 2, 3, 4], isOdd); // true
test2 = someRecursive([4, 6, 8, 9], isOdd); // true
test3 = someRecursive([4, 6, 8], isOdd); // false
test4 = someRecursive([4, 6, 8], val => val > 10); // false

console.log(test1, test2, test3, test4);

function flatten(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      results = results.concat(flatten(arr[i]));
    } else {
      results.push(arr[i]);
    }
  }
  return results;
}

test1 = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
test2 = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
test3 = flatten([[1], [2], [3]]); // [1,2,3]
test4 = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

console.log(test1, test2, test3, test4);
