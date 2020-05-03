import { Composite } from './Composite';
import { Component } from './Component';
import { Player } from './Player';

import { GameService } from '../services/GameService';


export class Players extends Composite {
    protected children: Player[] = [];
    private selectedIds: number[];
    
    constructor() {
        super();

        this.selectedIds = [];
    }

    // public render(): React.ReactNode {
    //     return this.children.map((child: Component) => {
    //         return child.render();
    //     })
    // }

    public length(): number {
        return this.children.length;
    }

    private getActivePlayers(): Player[] {
        console.log("children", this.children)
        return this.children.filter((child: Component) => {
            return child.active;
        })
    }

    public getRandomPlayer(): Player | null  {
        if(this.children.length > 0) {
            const selected: number = GameService.rollDice(0, this.children.length - 1)
            return this.children[selected];
        }
        return null;
    }

    public getRandomActivePlayer(lockedPlayers?: Player[]): Player | null {
        let players = this.getActivePlayers();
        console.log("players", players)
        if(lockedPlayers && lockedPlayers.length > 0) {
            players = players.filter((player: Player) => {
                return lockedPlayers.some((locked: Player) => {
                    return locked.toString() === player.toString()
                })
            })
        }

        if(players.length > 0) {
            const selected: number = GameService.rollDice(0, players.length - 1)
            return players[selected];
        }
        return null;
    }

    public renderOnlyActive(): React.ReactNode {
        return this.getActivePlayers();
    }


}

export default Players