import React from 'react';
import { v4 as uuid } from "uuid";
// import { GameObject } from './GameObject';

import Component from './Component';
import { PlayerView } from '../components/PlayerView/PlayerView';

export class Player extends Component {
    constructor(userId: string, displayName: string) {
        super();

        this.userId = userId;
        this.displayName = displayName;
        this.active = true;
        this.wins = 0;
    }

    public readonly userId: string;
    public readonly displayName: string; // ReactNode

    private wins: number;

    
    public win(): void {
        this.wins += 1;
    }

    public deActivate(): void {
        this.active = false;
    }


    public render(): React.ReactNode {
        return (
            <PlayerView key={uuid()} displayName={this.displayName} wins={this.wins}/>
        );
    }
}