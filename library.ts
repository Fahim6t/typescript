
import { book } from './book';

export class Library{
    private books: book[] = [];
    addBook(book: book): void {
        this.books.push(book);
    }

    listBooks(): string[] {
        const bookDetails: string[] = [];
        for (let i = 0; i < this.books.length; i++) {
            bookDetails.push(this.books[i].details());
        }
        return bookDetails;
    }

}