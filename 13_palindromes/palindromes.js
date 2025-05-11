const palindromes = function (str) {
  const chars = str
    .toLowerCase()
    .split("")
    .filter(function (char) {
      return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
    });

  const rev = [...chars].reverse().join("");
  const strings = chars.join("");
  if (rev === strings) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
