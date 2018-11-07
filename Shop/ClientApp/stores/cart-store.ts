import { observable, action, computed } from 'mobx';
import { IProduct, CartItem } from "../services/products-api";

 export class CartStore {
    @observable cartItems: CartItem[] = [];
    @observable cartActive: boolean = false;
    
    @action
    addToCart(product: IProduct) {
        if (this.cartItems.some(p => p.product.name === product.name)) {
            this.cartItems = this.cartItems.map(p => p.product.name === product.name
                ? new CartItem(p.product, p.quantity += 1)
                : p
            );
        }
        else {
            this.cartItems.push(new CartItem(product, 1));
        }
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

    @action
    incProductQuantity(cartItem: CartItem) {
        this.cartItems = this.cartItems.map(p => p.product.name === cartItem.product.name
            ? new CartItem(p.product, cartItem.quantity + 1)
            : p
        );
    }

    @action
    decProductQuantity(cartItem: CartItem) {
        this.cartItems = this.cartItems.map(p => p.product.name === cartItem.product.name
            ? new CartItem(p.product, cartItem.quantity - 1)
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