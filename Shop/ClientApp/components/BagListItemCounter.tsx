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

    @observable quantity: number = 1;
    store?: CartStore;

    constructor(props: BagListItemCounterProps) {
        super(props);
        this.handleInc = this.handleInc.bind(this);
        this.handleDec = this.handleDec.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.store = props.cartStore;
    }

    render() {
        return <div className="item-counter">
            <div className="input-group">
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" onClick={this.handleDec}>
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                </span>
                <input type="text" className="form-control input-number" value={this.quantity} onChange={this.handleChange} />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-default btn-number" onClick={this.handleInc}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
        </div>
    }

    handleInc() {
        this.quantity += 1;
        this.store!.setProductQuantity(this.props.cartItem.product, this.quantity);
    }

    handleDec() {
        this.quantity -= 1;
        this.store!.setProductQuantity(this.props.cartItem.product, this.quantity);
    }

    handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.quantity = parseInt(e.currentTarget.value);
        this.store!.setProductQuantity(this.props.cartItem.product, this.quantity);
    }
}