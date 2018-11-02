import * as React from 'react';
import { CartStore } from "../stores/store";
import { observer, inject } from 'mobx-react';

interface BagProps {
    cartStore?: CartStore;
}

@inject('cartStore')
@observer
export class Bag extends React.Component<BagProps, {}> {
    render() {
        const { cartStore } = this.props;
        return <div className="bag">
            <span className="item-count">{cartStore!.cartSize}</span>
        </div>
    }
} 