import { Product } from './Product';
import { Cart } from './Cart';


let cart = new Cart();
let product1 = new Product(101, 'Pen', 10);
let product2 = new Product(201, 'Ball', 15);

cart.addProduct(product1);
cart.addProduct(product2);


console.log("Total :"+ cart.calculateTotal()); 
console.log("Products: "+cart.getProduct());