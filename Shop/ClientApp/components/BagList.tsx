import * as React from 'react';
import { CartStore } from "../stores/store";
import { observer, inject } from 'mobx-react';
import { BagListItem } from "./BagListItem";

interface BagProps {
    cartStore?: CartStore;
}

@inject('cartStore')
@observer
export class BagList extends React.Component<BagProps, {}> {
    private store?: CartStore;

    constructor(props: BagProps) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.store = props.cartStore;
    }

    render() {
        return <div className={"bag-list " + (this.store!.cartActive ? "active" : "")}>
            <div className="close-bag" onClick={this.handleClose}>X</div>
            <div className="head">
                <span className="icon">
                    <span className="item-count">{this.store!.cartSize}</span>
                </span>
                <span className="title">Bag</span>
            </div>
            <div className="bagged-items">
                {
                    this.store!.cartItems.map(p => {
                        return <BagListItem cartItem={p} key={p.product.name}/>
                    })
                }
            </div>
            <div className="total">
                <div className="sub">
                    subtotal
                </div>
                <div className="cost">
                    $ {this.store!.cartTotal.toFixed(2)}
                </div>
                <button type="button" className="btn btn-dark checkout" onClick={() => { alert('test'); }}>
                    Checkout
                </button>
            </div>
        </div>
    }

    handleClose() {
        this.store!.setCartActive(false);
    }
} 