import React from 'react';
// import { useState } from 'react';

import styles from './BattleZone.module.scss'; 

import { Player } from '../Player/Player';

export interface IBattleZoneProps {
    players: [];
    // onChange(players: any[]) : void;
}


export function BattleZone(props: any) {
    console.log("muh", props.players)
  // const [players, setPlayers] = useState([]);

    const rollDice = (min: number, max: number) => {
        return min + Math.floor(Math.random() * (max-min + 1))
    }


    // const getPlayer2 = (p1: number): number => {
    //    const tryx: number = rollDice(0, props.players.length);
    //    if(tryx === p1) {
    //         return getPlayer2(p1);
    //    }
    //    return tryx;
    // }
  
    // const player1Number: number = rollDice(0, props.players.length;
    // const player2Number: number = getPlayer2(player1Number);


    return (
        <div className={styles.container}>
            {/* <Player player={props.players[2]} /> */}
            {/* <Player player={props.players[2]} /> */}
            <div>SYMBOL</div>
            <div>VS.</div>
            <div>SYMBOL</div>
            {/* <Player player={props.players[0]}/> */}
    
        </div>
    );
}

export default BattleZone;
