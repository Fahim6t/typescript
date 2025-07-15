import { Product } from './Product';

export class Cart{
    private products: Product[] = [];

    addProduct(product: Product){
        this.products.push(product);
    }
    getProduct(){
        return this.products;
    }
    calculateTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}