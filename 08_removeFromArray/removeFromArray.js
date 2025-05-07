const removeFromArray = function (array, ...args) {
  //   let newArr = [];
  //   array.forEach((item) => {
  //     if (!args.includes(item)) {
  //       newArr.push(item);
  //     }
  //   });
  //   return newArr;

  return array.filter((item) => {
    return !args.includes(item);
  });
};

// Do not edit below this line
module.exports = removeFromArray;
