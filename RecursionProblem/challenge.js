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

function capitalizeFirst(arr) {
  let result = [];
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    let initialStr = arr[i][0].toUpperCase();
    let combinedStr = initialStr + arr[i].slice(1);
    result.push(combinedStr);
  }
  return result;
}

test1 = capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']

console.log(test1);

function nestedEvenSum(obj) {
  let result = 0;
  for (let val in obj) {
    if (typeof obj[val] === 'number' && obj[val] % 2 === 0) {
      result += obj[val];
    } else {
      if (typeof obj[val] === 'object') {
        result += nestedEvenSum(obj[val]);
      }
    }
  }
  return result;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

test1 = nestedEvenSum(obj1); // 6
test2 = nestedEvenSum(obj2); // 10

console.log(test1, test2);

function capitalizedWords(arr) {
  let results = [];
  for (let val of arr) {
    val = val.toUpperCase();
    results.push(val);
  }
  return results;
}

let words = ['i', 'am', 'learning', 'recursion'];
test1 = capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(test1);

function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = obj[key];
    } else if (typeof obj[key] === 'object') {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

test1 = stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

console.log(test1);

function collectStrings(obj) {
  let results = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      results = results.concat(collectStrings(obj[key]));
    }
    if (typeof obj[key] === 'string') {
      results.push(obj[key]);
    }
  }

  return results;
}

const testobj1 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

test1 = collectStrings(testobj1); // ["foo", "bar", "baz"])
console.log(test1);
