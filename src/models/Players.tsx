import { Composite } from './Composite';
import { Component } from './Component';
import { Player } from './Player';

import { GameService } from '../services/GameService';


export class Players extends Composite {
    protected children: Player[] = [];
    private selected: number[];
    // constructor(children: Component[]) {
    //     super();

    //     this.children = children;
    // }

    // public render(): React.ReactNode {
    //     return this.children.map((child: Component) => {
    //         return child.render();
    //     })
    // }

    private getActivePlayer(): Player[] {
        return this.children.filter((child: Component) => {
            return child.active;
        })
    }

    public getRandomPlayer(): Player {
        const selected: number = GameService.rollDice(0, this.children.length - 1)
        return this.children[selected];
    }

    public getRandomActivePlayer(): Player {
        const activePlayer = this.getActivePlayer();
        const selected: number = GameService.rollDice(0, activePlayer.length - 1)
        return activePlayer[selected];
    }

    public renderOnlyActive(): React.ReactNode {
        return this.getActivePlayer();
    }


}

export default Players