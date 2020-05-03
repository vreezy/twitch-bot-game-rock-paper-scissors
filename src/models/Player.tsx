import React from 'react';
// import { v4 as uuid } from "uuid";
// import { GameObject } from './GameObject';

import Component from './Component';

export class Player extends Component {
    constructor(userId: string, displayName: string) {
        super();

        this.userId = userId;
        this.displayName = displayName;
    }

    public readonly userId: string;
    public readonly displayName: string; // ReactNode

    public render(): React.ReactNode {
        return (
            <div>{this.displayName}</div>
        );
    }
}