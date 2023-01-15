// recursive solution => Causing Overlapping SubProblems
function fib(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fib(n - 2) + fib(n - 1);
}

// Memorization
function fib2(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}

function fib3(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  let res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}
