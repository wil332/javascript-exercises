const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  let sum = 0;
  for (num of x) {
    sum += num;
  }
  return sum;
};

const multiply = function (x) {
  let multi = 1;
  for (let i = 0; i < x.length; i++) {
    multi *= x[i];
  }
  return multi;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let result = 1;
  for (let i = x; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
