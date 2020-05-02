import React from 'react';
// import { useState } from 'react';

import styles from './BattleZone.module.scss'; 

import { Player } from '../Player/Player';

import { IPlayer } from '../../interfaces/IPlayer';

export interface IBattleZoneProps {
    players: IPlayer[];
    // onChange(players: any[]) : void;
}


export function BattleZone(props: IBattleZoneProps) {
  // const [players, setPlayers] = useState([]);

    const rollDice = (min: number, max: number) => {
        return min + Math.floor(Math.random() * (max-min + 1))
    }


    const getPlayer2 = (p1: number): number => {
        if(props.players.length > 0) {
            const tryx: number = rollDice(0, props.players.length);
            if(tryx === p1) {
                    return getPlayer2(p1);
            }
            
            return tryx;
        }
        return 0;
    }
  
    const player1Number: number = rollDice(0, props.players.length - 1);
    const player2Number: number = getPlayer2(player1Number);

    console.log("player1Number ", player1Number);
    console.log("player2Number ", player2Number)
    


    if(props.players.length > 0) {
        return (
            <div className={styles.container}>
                <Player key="p1" player={props.players[player1Number]} />
                {/* <Player player={props.players[2]} /> */}
                <div>SYMBOL</div>
                <div>VS.</div>
                <div>SYMBOL</div>
                <Player key="p2" player={props.players[player2Number]} />
        
            </div>
        );
    }

    return null;
}

export default BattleZone;
