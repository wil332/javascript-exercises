const repeatString = function (string, number) {
  let newString = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 0; i < number; i++) {
    newString += string;
  }
  return newString;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
