import * as React from 'react';
import { ProductsService, IProduct } from '../services/products-service';
import { CartStore } from "../stores/cart-store";
import { observer, inject } from "mobx-react";
import { ProductsStore } from "../stores/products-store";

interface ProductProps {
    productsStore?: ProductsStore;
}

@inject('productsStore')
@observer
export class Products extends React.Component<ProductProps, {}> {
    private productsStore?: ProductsStore;
    constructor(props: ProductProps) {
        super(props);
        this.productsStore = this.props.productsStore;
    }

    async componentDidMount() {
        await this.productsStore!.getProducts();
    }

    render() {
    return <div className="products">
        {
            this.productsStore!.loading && <div className="loader"></div>
        }
        {
            this.productsStore!.products.map(p => {
                return <ProductItem product={p} key={p.name} />
            })
        }
        </div>
    }
}

interface ProductItemProps {
    product: IProduct;
    cartStore?: CartStore;
}

@inject('cartStore')
@observer
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
        this.props.cartStore!.addToCart(this.props.product);
        this.props.cartStore!.setCartActive(true);
    }
}