"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Cart.prototype.getProduct = function () {
        return this.products;
    };
    Cart.prototype.calculateTotal = function () {
        return this.products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    return Cart;
}());
exports.Cart = Cart;
