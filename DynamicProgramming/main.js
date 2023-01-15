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

// Tabulation(bottom up)
function fib4(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    return fibNums[n];
  }
}
