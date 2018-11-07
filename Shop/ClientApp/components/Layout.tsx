import * as React from 'react';
import { SizeFilter } from "./SizeFilter";
import { Bag } from "./Bag";
import { BagList } from "./BagList";


export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className="container">
            <div className="row">
                <div>
                    <Bag />
                    <BagList />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2">
                    <SizeFilter />
                </div>
                <div className="col-sm-10">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
