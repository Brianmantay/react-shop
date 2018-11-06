import * as React from 'react';
import { observer, inject } from "mobx-react";
import { ProductsStore } from "../stores/products-store";

export interface ISizeFilterProps {
    productsStore?: ProductsStore;
}

@inject('productsStore')
@observer
export class SizeFilter extends React.Component<ISizeFilterProps, {}> {

    private readonly sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];

    render() {
        return <div className="size-filter">
            <h4>Sizes:</h4>
            {
                this.sizes.map(s => (<SizeFilterOption option={s} key={s} />))
            }
        </div>
    }
};


export interface ISizeFilterOptionProps {
    productsStore?: ProductsStore;
    option: string;
}

@inject('productsStore')
@observer
export class SizeFilterOption extends React.Component<ISizeFilterOptionProps, {}> {

    constructor() {
        super();
        this.handleSizeSelection = this.handleSizeSelection.bind(this);
    }

    render() {
        const { option, productsStore } = this.props;
        return <span
            className={productsStore!.hasSizeFilter(option) ? "size-active" : ""}
            key={option}
            onClick={() => this.handleSizeSelection(option)}> {option} </span>
    }

    handleSizeSelection(option: string) {
        const { productsStore } = this.props;
        productsStore!.toggleSizeFilter(option);
    }
};