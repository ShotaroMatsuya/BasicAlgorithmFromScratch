function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

let test1 = power(2, 0); // 1
let test2 = power(2, 2); // 4
let test3 = power(2, 4); // 16

console.log(test1, test2, test3);

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

test1 = factorial(1); // 1
test2 = factorial(2); // 2
test3 = factorial(4); // 24
let test4 = factorial(7); // 5040
console.log(test1, test2, test3, test4);

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  let newArray = [];
  newArray = arr.slice(1);
  return arr[0] * productOfArray(newArray);
}

test1 = productOfArray([1, 2, 3]); // 6
test2 = productOfArray([1, 2, 3, 10]); // 60
console.log(test1, test2);

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

test1 = recursiveRange(6); // 21
test2 = recursiveRange(10); // 55

console.log(test1, test2);

function fib(num) {
  if (num === 1 || num === 2) return 1;
  if (num === 0) return 0;
  return fib(num - 1) + fib(num - 2);
}

test1 = fib(4); // 3
test2 = fib(10); // 55
test3 = fib(28); // 317811
test4 = fib(35); // 9227465

console.log(test1, test2, test3, test4);
