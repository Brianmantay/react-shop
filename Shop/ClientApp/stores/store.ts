import { observable, action, computed } from 'mobx';
import { IProduct, CartItem } from "../services/products-service";

 export class CartStore {
    @observable cartItems: CartItem[] = [];
    @observable cartActive: boolean = false;
    
    @action
    addToCart(product: IProduct) {
        this.cartItems.push(new CartItem(product, 1));
    }

    @action
    setCartActive(active: boolean) {
        this.cartActive = active;
    }

    @action
    removeProduct(product: IProduct) {
        this.cartItems = this.cartItems.filter(p => p.product.name != product.name);
        if (!this.cartItems.length)
            this.cartActive = false;
    }

    @action
    setProductQuantity(product: IProduct, quantity: number) {
        if (quantity <= 0) {
            this.removeProduct(product);
            return;
        }
        this.cartItems = this.cartItems.map(p => p.product.name === product.name
            ? new CartItem(p.product, quantity)
            : p
        );
    }

    @computed
    get cartSize(): number {
        return this.cartItems.reduce((prev, cur) => prev + cur.quantity, 0);
    }

    @computed
    get cartTotal(): number {
        return this.cartItems.map(p => p.product.cost * p.quantity)
            .reduce((prev, cur) => prev + cur, 0);
    }
}
const cartStore = new CartStore();
export default cartStore;