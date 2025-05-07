const sumAll = function (first, last) {
  let sum = 0;

  if (
    Number.isInteger(first) &&
    Number.isInteger(last) &&
    first >= 0 &&
    last >= 0
  ) {
    if (first > last) {
      for (let i = last; i <= first; i++) {
        sum += i;
      }
    } else {
      for (let i = first; i <= last; i++) {
        sum += i;
      }
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
