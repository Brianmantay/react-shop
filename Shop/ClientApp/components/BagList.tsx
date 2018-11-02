import * as React from 'react';
import { CartStore } from "../stores/store";
import { observer, inject } from 'mobx-react';

interface BagProps {
    cartStore?: CartStore;
}

@inject('cartStore')
@observer
export class BagList extends React.Component<BagProps, {}> {
    constructor() {
        super();
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        const { cartStore } = this.props;
        return <div className={"bag-list " + (cartStore!.cartActive ? "active" : "")}>
            <div className="close" onClick={this.handleClose}>X</div>
            <div className="head">
                <span className="icon">
                    <span className="item-count">{cartStore!.cartSize}</span>
                </span>
                <span className="title">Bag</span>
            </div>
        </div>
    }

    handleClose() {
        const { cartStore } = this.props;
        cartStore!.setCartActive(false);
    }
} 