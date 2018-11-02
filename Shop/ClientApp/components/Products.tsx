import * as React from 'react';
import { ProductsService, Product } from '../services/products-service';

export const Products: React.SFC<{}> = (props) => {
    const productService = new ProductsService();
    const products = productService.getProducts();
    return <div className="products"> {
        products.map(p => {
            return <ProductItem product={p} key={p.name} />
        })    
    }
    </div>
}

interface ProductItemProps {
    product: Product;
}
export class ProductItem extends React.Component<ProductItemProps, {}> {

    constructor() {
        super();
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    render() {
        const { product } = this.props;
        return (
            <div className="product-item">
                <div className="img-container">
                    <img src={product.imageUrl} />
                </div>
                <p className="product-name">{product.name}</p>
                <hr />
                <p>{product.description}</p>
                <div className="cost">
                    <small>$</small>
                    <b>{product.cost.toFixed(2)}</b>
                </div>
                <button type="button" className="btn btn-dark" onClick={this.handleAddToCart}>
                    Add to cart
            </button>
            </div>
        )
    }

    handleAddToCart() {
        alert(this.props.product.name);
    }
}