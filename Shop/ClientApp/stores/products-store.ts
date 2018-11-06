import { observable, action, computed, runInAction } from 'mobx';
import { IProduct, ProductsService } from "../services/products-service";

export class ProductsStore {
    @observable products: IProduct[] = [];
    @observable loading: boolean = false;
    @observable sizeFilters: string[] = [];
    @observable sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
    @observable totalRecords: number = 0;

    constructor(private productsApi: ProductsService) {
    }

    @action
    async getProducts(page: number = 1) {
        this.loading = true;

        const filter = !this.products.length
            ? this.sizes
            : this.sizeFilters;

        const result = await this.productsApi.getProductsBySize(filter, page);
        runInAction(() => {
            this.products = result.products;
            this.totalRecords = result.total;
            this.loading = false;
        })
    }

    @action
    addSizeFilter(option: string) {
        this.sizeFilters.push(option);
    }

    @action
    async toggleSizeFilter(size: string) {
        if (!this.hasSizeFilter(size)) {
            this.sizeFilters.push(size);
        }
        else {
            this.sizeFilters = this.sizeFilters.filter(s => s !== size);
        }
        await this.getProducts();
    }

    hasSizeFilter(size: string): boolean {
        return this.sizeFilters.some(s => s === size);
    }

}

const productsStore = new ProductsStore(new ProductsService());
export default productsStore;