
export class ProductsService {
    public getProducts(): Product[] {
        return [
            {
                name: "Blue t-shirt",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                cost: 99.00,
                description: "A blue t-shirt"
            },
            {
                name: "Red t-shirt",
                imageUrl: "https://www.ascolour.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/0/5001_staple_tee_red_13.jpg",
                cost: 100.00,
                description: "A red t-shirt"
            },
            {
                name: "Yellow t-shirt",
                imageUrl: "http://www.richworth.in/media/catalog/product/optimized/9/0/906ed12c07dc39818aa7f2ad245f9525/men_s_round_neck_tshirt_rwst_019-yellow.jpg",
                cost: 75.50,
                description: "A yellow t-shirt"
            },
            {
                name: "Green t-shirt",
                imageUrl: "https://i.ebayimg.com/images/g/2MoAAOxyUI1TH3TE/s-l300.jpg",
                cost: 85.50,
                description: "A green t-shirt"
            }
        ]
    }
}

export interface Product {
    name: string;
    imageUrl: string;
    cost: number;
    description: string;
}