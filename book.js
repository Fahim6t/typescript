"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
var book = /** @class */ (function () {
    function book(name, author) {
        this.bName = name;
        this.bAuthor = author;
    }
    book.prototype.details = function () {
        return "Name: ".concat(this.bName, ", Author: ").concat(this.bAuthor);
    };
    return book;
}());
exports.book = book;
