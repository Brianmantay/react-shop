import * as React from 'react';
import { CartStore } from "../stores/store";
import { observer, inject } from 'mobx-react';
import { IProduct, CartItem } from "../services/products-service";
import { BagListItemCounter } from "./BagListItemCounter";

interface BagListItemProps {
    cartStore?: CartStore;
    cartItem: CartItem;
}

@inject('cartStore')
@observer
export class BagListItem extends React.Component<BagListItemProps, {}> {

    constructor() {
        super();
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    render() {
        const { product } = this.props.cartItem;
        const { cartItem } = this.props;
        return <div className="bagged-item">
            <div className="picture">
                <img src={product.imageUrl} />
            </div>
            <div className="name-description">
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
            </div>
            <div className="item-price">
                $ {cartItem.total.toFixed(2)}
                <BagListItemCounter cartItem={cartItem} />
            </div>
            <div className="remove-item" onClick={this.handleRemoveItem}>X</div>
        </div>
    }

    handleRemoveItem() {
        const { cartStore, cartItem } = this.props;
        cartStore!.removeProduct(cartItem.product);
    }
} 