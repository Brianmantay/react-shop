import { observable, action, computed, runInAction } from 'mobx';
import { IProduct, ProductsService } from "../services/products-service";

export class ProductsStore {
    @observable products: IProduct[] = [];

    constructor(private productsApi: ProductsService) {
    }

    @action
    async getProducts() {
        const products = await this.productsApi.getProducts();
        runInAction(() => {
            this.products = products;
        })
    }

}

const productsStore = new ProductsStore(new ProductsService());
export default productsStore;