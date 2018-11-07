
export class ProductsApi {
    public async getProducts(): Promise<IProduct[]> {
        const response = await fetch(`${window.config.apiUrl}/api/products`);
        if (!response.ok)
            throw Error(response.statusText);
        return await response.json() as IProduct[];
    }

    public async getProductsBySize(sizeFilters: string[], page: number, pageSize: number): Promise<IProductsPaged> {
        const response = await fetch(`${window.config.apiUrl}/api/products`, {
            method: 'post',
            body: JSON.stringify({
                page,
                sizeFilters,
                pageSize
            }),
            headers: [
                ["Content-Type", "application/json"],
            ]
        });
        return await response.json() as IProductsPaged;
    }
}

export interface IProductsPaged
{
    products: IProduct[]
    total: number;
}

export interface IProduct {
    name: string;
    imageUrl: string;
    cost: number;
    description: string;
    size: string;
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
    total: number;
}

export class CartItem implements ICartItem {
    constructor(product: IProduct, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
    product: IProduct = {} as IProduct;
    quantity: number = 1;
    get total(): number {
        return this.product.cost * this.quantity;
    }
}