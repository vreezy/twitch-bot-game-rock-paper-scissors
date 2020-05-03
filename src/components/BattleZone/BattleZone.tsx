import React from 'react';
import { useState, useEffect, useRef } from 'react';

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

    // 0 rock
    // 1 paper
    // 2 scissors

    // 2 > 1 > 0 > 2

    const getSymbol = (value: number) => {
        switch(value) {
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            default:
            case 2:
                return "Scissors";
        }
    }


  
    const player1Number: number = rollDice(0, props.players.length - 1);
    const player2Number: number = getPlayer2(player1Number);

    const player1HandValue: number = rollDice(0, 2);
    const player2HandValue: number = rollDice(0, 2);

    console.log("player1Number ", player1Number);
    console.log("player2Number ", player2Number)
    
    const p1Result = (player1HandValue: number, player2HandValue: number) => {
        if(player1HandValue === player2HandValue) {
            return "draw"
        }
                // 2        > 0 false
                // 1        > 0 true
                // 2    > 1 true
                // 1    > 2 false
        
        if((player1HandValue - player2HandValue) === 1 || (player1HandValue - player2HandValue) === -1) {
            if(player1HandValue > player2HandValue) {
                return "win"
            }
            return "lose"
        }

        // 2 > 0
        // 0 > 2
        if(player1HandValue > player2HandValue) {
            return "lose"
        }
        return "win"
    }

    // useInterval(() => {
    //     setCount(count + 1);
    // }, delay);

    if(props.players.length > 0) {
        return (
            <div className={styles.container}>
                <Player key="p1" player={props.players[player1Number]} />
                {/* <Player player={props.players[2]} /> */}
                <div>
                    SYMBOL<br />
                    {getSymbol(player1HandValue)}<br />
                    {player1HandValue}<br/>
                    {p1Result(player1HandValue, player2HandValue)}</div>
                <div>VS.</div>
                <div>
                    SYMBOL<br />
                    {getSymbol(player2HandValue)}<br />
                    {player2HandValue}</div>
                <Player key="p2" player={props.players[player2Number]} />
        
            </div>
        );
    }

    return null;
}

// function useInterval(callback:any, delay:any) {
//     const savedCallback = useRef();
  
//     useEffect(() => {
//       savedCallback.current = callback;
//     });
  
//     useEffect(() => {
//       function tick() {
//         savedCallback.current();
//       }
  
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }, [delay]);
//   }

export default BattleZone;
