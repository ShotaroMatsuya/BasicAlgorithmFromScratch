// recursive solution => Causing Overlapping SubProblems
function fib(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fib(n - 2) + fib(n - 1);
}

