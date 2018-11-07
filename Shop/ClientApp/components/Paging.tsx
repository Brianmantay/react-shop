import * as React from 'react';
import { observer, inject } from "mobx-react";
import { observable, runInAction, action } from "mobx";

export interface IPagingProps {
    totalRecords: number;
    pageSize: number;
    handleSelection(page: number): void;
}

@observer
export class Paging extends React.Component<IPagingProps, {}> {
    @observable selected: number;
    pages: number;

    constructor() {
        super();
        this.setSelected(1);
    }

    render() {
        const { totalRecords, pageSize } = this.props;
        this.pages = Math.ceil(totalRecords / pageSize);
        return <nav className="paging">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" onClick={() => { this.handleNavigation(this.selected - 1) }}>
                        <span>&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {
                    Array.from(Array(this.pages).keys()).map(n => {
                        let number = n + 1;
                        return <li key={number} className={"page-item " + (this.selected === number ? "active" : "")}>
                            <a className="page-link"
                                onClick={() => {
                                    this.handleNavigation(number);
                                }}>{number}
                            </a>
                        </li>
                    })
                }
                <li className="page-item">
                    <a className="page-link" onClick={() => { this.handleNavigation(this.selected + 1) }}>
                        <span>&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    }

    @action
    setSelected(number: number) {
        this.selected = number;
    }

    handleNavigation(number: number) {
        if (number < 1 || number > this.pages) return;
        const { handleSelection } = this.props;
        this.setSelected(number);
        handleSelection(number);
    }
};