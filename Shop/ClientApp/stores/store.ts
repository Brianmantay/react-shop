import { observable, action, computed } from 'mobx';
import { Product } from "../services/products-service";

 export class CartStore {
     @observable products: Product[] = [];
     @observable cartActive: boolean = false;
    
    @action
    addToCart(product: Product) {
        this.products.push(product);
    }

    @computed
    get cartSize(): number {
        return this.products.length;
    }

    @action
    setCartActive(active: boolean) {
        this.cartActive = active;
    }

}
const cartStore = new CartStore();
export default cartStore;