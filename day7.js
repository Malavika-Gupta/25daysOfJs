//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "Five Point Someone",
    author: "Chetan Bhagat",
    year: 2010
};
console.log(book);
// Output: { title: 'Five Point Someone', author: 'Chetan Bhagat', year: 2010 }

//Task 2: Access and log the title and author properties of the book object.
console.log('Title:', book.title); // Output: Title: Five Point Someone
console.log('Author:', book.author); // Output: Author: Chetan Bhagat

//Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails()); // Output: Five Point Someone by Chetan Bhagat

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
};
book.updateYear(1961);
console.log(book);
// Output: { title: 'Five Point Someone', author: 'Chetan Bhagat', year: 2009, getDetails: [Function], updateYear: [Function] }

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "City Library",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    ]
};
console.log(library);
// Output: 
// {
//   name: 'City Library',
//   books: [
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { title: '1984', author: 'George Orwell', year: 1949 },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
//   ]
// }

//Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log('Library Name:', library.name); // Output: Library Name: City Library
console.log('Book Titles:');
library.books.forEach(book => console.log(book.title));
// Output:
// Book Titles:
// To Kill a Mockingbird
// 1984
// The Great Gatsby

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTitleAndYear = function() {
    return `${this.title} (${this.year})`;
};
console.log(book.getTitleAndYear()); // Output: Five Point Someone (2009)

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log('Using for...in loop:');
for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}
// Output:
// Using for...in loop:
// title: Five Point Someone
// author: Chetan Bhagat
// year: 2009
// getDetails: function() { return `${this.title} by ${this.author}`; }
// updateYear: function(newYear) { this.year = newYear; }
// getTitleAndYear: function() { return `${this.title} (${this.year})`; }

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log('Keys:', Object.keys(book)); // Output: Keys: ['title', 'author', 'year', 'getDetails', 'updateYear', 'getTitleAndYear']
console.log('Values:', Object.values(book)); 
// Output: 
// Values: [
//   'Five Point Someone',
//   'Chetan Bhagat',
//   2009,
//   [Function: getDetails],
//   [Function: updateYear],
//   [Function: getTitleAndYear]
// ]






