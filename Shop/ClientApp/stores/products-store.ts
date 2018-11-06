import { observable, action, computed, runInAction } from 'mobx';
import { IProduct, ProductsService } from "../services/products-service";

export class ProductsStore {
    @observable products: IProduct[] = [];
    @observable loading: boolean = false;

    constructor(private productsApi: ProductsService) {
    }

    @action
    async getProducts() {
        this.loading = true;
        const products = await this.productsApi.getProducts();
        runInAction(() => {
            this.products = products;
            this.loading = false;
        })
    }

}

const productsStore = new ProductsStore(new ProductsService());
export default productsStore;