import * as React from 'react';
import { CartStore } from "../stores/store";
import { observer, inject } from 'mobx-react';
import { IProduct, CartItem } from "../services/products-service";
import { observable } from "mobx";

interface BagListItemCounterProps {
    cartStore?: CartStore;
    cartItem: CartItem;
}

@inject('cartStore')
@observer
export class BagListItemCounter extends React.Component<BagListItemCounterProps, {}> {

    store?: CartStore;

    constructor(props: BagListItemCounterProps) {
        super(props);
        this.handleInc = this.handleInc.bind(this);
        this.handleDec = this.handleDec.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.store = props.cartStore;
    }

    render() {
        const { cartItem } = this.props
        return <div className="item-counter">
            <div className="input-group">
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" onClick={this.handleDec}>
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                </span>
                <input type="text" className="form-control input-number" value={cartItem.quantity} onChange={this.handleChange} />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" onClick={this.handleInc}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
        </div>
    }

    handleInc() {
        this.store!.incProductQuantity(this.props.cartItem);
    }

    handleDec() {
        this.store!.decProductQuantity(this.props.cartItem);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.store!.setProductQuantity(this.props.cartItem.product, parseInt(e.currentTarget.value));
    }
}