import * as React from 'react';
import { CartStore } from "../stores/store";
import { observer, inject } from 'mobx-react';
import { Product } from "../services/products-service";

interface BagListItemProps {
    cartStore?: CartStore;
    product: Product;
}

@inject('cartStore')
@observer
export class BagListItem extends React.Component<BagListItemProps, {}> {

    constructor() {
        super();
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    render() {
        const { product } = this.props;
        return <div className="bagged-item">
            <div className="picture">
                <img src={product.imageUrl} />
            </div>
            <div className="name-description">
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
            </div>
            <div className="item-price">
                $ {product.cost.toFixed(2)}
            </div>
            <div className="remove-item" onClick={this.handleRemoveItem}>X</div>
        </div>
    }

    handleRemoveItem() {
        const { cartStore, product } = this.props;
        cartStore!.removeProduct(product);
    }
} 