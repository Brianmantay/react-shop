import { observable, action, computed } from 'mobx';
import { Product } from "../services/products-service";

 export class CartStore {
     @observable products: Product[] = [];
     @observable cartActive: boolean = false;
    
    @action
    addToCart(product: Product) {
        this.products.push(product);
    }

    @action
    setCartActive(active: boolean) {
        this.cartActive = active;
    }

    @action
    removeProduct(product: Product) {
        this.products = this.products.filter(p => p.name != product.name);
        if (!this.products.length)
            this.cartActive = false;
    }

    @computed
    get cartSize(): number {
        return this.products.length;
    }

    @computed
    get cartTotal(): number {
        return this.products.map(p => p.cost)
            .reduce((prev, cur) => prev + cur, 0);
    }

}
const cartStore = new CartStore();
export default cartStore;