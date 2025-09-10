// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.


const Book = {
    Title : "Computer Science",
    author : "Ahmad",
    published_year : 2025,
    pages : 390,
    updateYear : function (year) {
       this.published_year = year;
       console.log(Book);
    }
}


console.log(Book);




// / Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.


const Bookdetail = {
    Title : "Computer Science",
    author : "Ahmad",
    published_year : 2025,
    pages : 390,
    updateYear : function (year) {
       this.published_year = year;
       console.log(Book);
       
    }
}


console.log(Bookdetail);   // Before updation
console.log(Bookdetail.updateYear(2000));  // ofter Updatation

