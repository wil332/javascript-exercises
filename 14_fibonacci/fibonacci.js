const fibonacci = function (countArgs) {
  let count;
  if (typeof countArgs !== "number") {
    count = parseInt(countArgs);
  } else {
    count = countArgs;
  }

  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  //   let firstPrev = 1;
  //   let secondPrev = 0;

  //   for (let i = 2; i <= count; i++) {
  //     let current = firstPrev + secondPrev;
  //     secondPrev = firstPrev;
  //     firstPrev = current;
  //   }
  //   return firstPrev;
  const fib = [0, 1];
  for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
