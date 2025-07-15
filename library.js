"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.listBooks = function () {
        var bookDetails = [];
        for (var i = 0; i < this.books.length; i++) {
            bookDetails.push(this.books[i].details());
        }
        return bookDetails;
    };
    return Library;
}());
exports.Library = Library;
