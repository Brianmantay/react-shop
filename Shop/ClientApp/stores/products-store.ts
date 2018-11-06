import { observable, action, computed, runInAction } from 'mobx';
import { IProduct, ProductsService } from "../services/products-service";

export class ProductsStore {
    @observable products: IProduct[] = [];
    @observable loading: boolean = false;
    @observable sizeFilters: string[] = [];

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

    @action
    addSizeFilter(option: string) {
        this.sizeFilters.push(option);
    }

    @action
    toggleSizeFilter(size: string) {
        if (!this.hasSizeFilter(size)) {
            this.sizeFilters.push(size);
        }
        else {
            this.sizeFilters = this.sizeFilters.filter(s => s !== size);
        }
    }

    hasSizeFilter(size: string): boolean {
        return this.sizeFilters.some(s => s === size);
    }

}

const productsStore = new ProductsStore(new ProductsService());
export default productsStore;