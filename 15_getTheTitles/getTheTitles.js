const getTheTitles = function (arr) {
  return arr.map((book) => book.title);
};

const books = [
  {
    title: "Belajar SQL",
    author: "Rudi Hartono",
  },
  {
    title: "Rahasia Sukses",
    author: "Robert Kiyosaki",
  },
];
// Do not edit below this line
module.exports = getTheTitles;
