// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const Books = {
  book_Name: "science",
  published_year: 2025,
  pages: 400,
};

Books.book_pages = Books.pages; // rename the pages key.
delete Books.pages;

Books.book_pages = 500; // update the object value
console.log(Books); // access the Books object

for (const key in Books) {
  console.log(key); // access the key of the object
}

for (const element of Object.values(Books)) {
  console.log(element); // access the key of the object
}

for (const [key, value] of Object.entries(Books)) {
  console.log(`${key} , ${value}`); // access both key and value
}

Object.keys(Books).forEach((element) => {
  console.log(element); // access the ke using foreach loop
});

Object.values(Books).forEach((element) => {
  console.log(element); // access the object values using foreach loop.
});
