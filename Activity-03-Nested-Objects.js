// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const labrary = {
  labrary_Name: "KUST Labrary",
  books: [
    {
      book_Name: "science",
      book_puslished_year: 2000,
      book_pages: 400,
    },

    {
      book_Name: "Biology",
      book_puslished_year: 2000,
      book_pages: 400,
    },

    {
      book_Name: "english",
      book_puslished_year: 2000,
      book_pages: 400,
    },
  ],
};

console.log(labrary.books);


// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(labrary.labrary_Name);
// console.log(labrary.bo);

labrary.books.forEach(element => {
    console.log(element.book_Name);
});
