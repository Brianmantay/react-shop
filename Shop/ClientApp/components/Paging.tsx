import * as React from 'react';
import { observer, inject } from "mobx-react";

export interface IPagingProps {
    totalRecords: number;
    pageSize: number;
    handleSelection(page: number): void;
}

@observer
export class Paging extends React.Component<IPagingProps, {}> {
    
    render() {
        const { totalRecords, pageSize, handleSelection } = this.props;
        let pages = Math.ceil(totalRecords / pageSize);
        return <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {
                    Array.from(Array(pages).keys()).map(n => (<PagingOption number={n + 1} key={n} handleSelection={handleSelection} />))
                }
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    }
};


export interface IPagingOptionProps {
    number: number;
    handleSelection(page: number): void;
}

@observer
export class PagingOption extends React.Component<IPagingOptionProps, {}> {
    render() {
        const { number, handleSelection } = this.props;
        return <li className="page-item"><a className="page-link" onClick={() => handleSelection(number)}>{number}</a></li>
    }
};