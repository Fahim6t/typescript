import { Book } from './book';
import { Library } from './library';

const library = new Library();

const book1 = new Book("Book1","Thameem");
const book2 = new Book("Book2","Vaseem");

library.addBook(book1);
library.addBook(book2);

console.log(library.listBooks());
