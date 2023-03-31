// Suppose we have an array of objects representing books and we want to get a 
// new array containing only the books whose title length is greater than a certain 
// value and which are sorted alphabetically by author in 
// ascending order. Also, we want the new array to contain only the 
// following fields from each object: title, author, and year.

//Minimum title length = 21;

const books = [
    { title: 'The shadow of the wind', author: 'Carlos Ruiz Zafón', year: 2001 },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: 1967 },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
    { title: 'The name of the wind', author: 'Patrick Rothfuss', year: 2007 },
    { title: '1984', author: 'George Orwell', year: 1949 }
];

const k = 2;
const minimunTitleLength = 21;

function bookStore(books, k){

let filterBooks = [];
let sortBooks = [];

switch(k){
    case 1:
        filterBooks = books.filter(book => book.title.length < minimunTitleLength);
        console.log("\nbooks with a length less than 21 are:");
        return filterBooks;
        break;
    case 2:
        sortBooks = books.map(book =>({title : book.title , author: book.author, year : book.year}));
        console.log("\n new array with order\n");
        return sortBooks.sort();
    default:
        return "";

}
}


console.log(bookStore(books, k))