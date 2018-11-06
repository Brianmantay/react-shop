
export class ProductsService {
    public async getProducts(): Promise<IProduct[]> {
        try {
            const response = await fetch(`http://localhost:62699/api/products`);
            if (!response.ok)
                throw Error(response.statusText);
            return await response.json() as IProduct[];
        } catch (error) {
            throw Error(error);
        }
    }

    public async getProductsBySize(sizeFilters: string[], page: number): Promise<IProductsPaged> {
        try {
            const response = await fetch(`http://localhost:62699/api/products`, {
                method: 'post',
                body: JSON.stringify({
                    page,
                    sizeFilters,
                    pageSize: 3
                }),
                headers: [
                    ["Content-Type", "application/json"],
                ]
            });
            if (!response.ok)
                throw Error(response.statusText);
            return await response.json() as IProductsPaged;
        } catch (error) {
            throw Error(error);
        }
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
    size: string[];
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