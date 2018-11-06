import * as React from 'react';
import { CartStore } from "../stores/cart-store";
import { observer, inject } from 'mobx-react';

interface BagProps {
    cartStore?: CartStore;
}

@inject('cartStore')
@observer
export class Bag extends React.Component<BagProps, {}> {
    private store?: CartStore;

    constructor(props: BagProps) {
        super(props);
        this.toggleBag = this.toggleBag.bind(this);
        this.store = props.cartStore;
    }

    render() {
        return <div className="bag" onClick={this.toggleBag}>
            <span className="item-count">{this.store!.cartSize}</span>
        </div>
    }

    toggleBag() {
        this.store!.setCartActive(true);
    }
} 