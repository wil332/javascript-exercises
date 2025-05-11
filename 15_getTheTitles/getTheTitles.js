const getTheTitles = function (arr) {
  for (const book of books) {
    return book.title;
  }
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
