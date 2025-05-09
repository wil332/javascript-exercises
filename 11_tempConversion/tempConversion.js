const convertToCelsius = function (num) {
  const res = ((num - 32) * 5) / 9;
  const round = Math.round(res * 10) / 10;
  return Number.isInteger(round) ? round : round;
};

const convertToFahrenheit = function (num) {
  const res = (num * 9) / 5 + 32;
  const round = Math.round(res * 10) / 10;
  return Number.isInteger(round) ? round : round;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
