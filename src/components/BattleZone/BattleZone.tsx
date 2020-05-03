import React from 'react';
import { useState, useEffect, useRef } from 'react';

import styles from './BattleZone.module.scss'; 

import { Player } from '../Player/Player';

import { IPlayerValue } from '../../interfaces/IPlayerValue';

export interface IBattleZoneProps {
    players: IPlayerValue[];
    onChange(players: IPlayerValue[]) : void;
}


export function BattleZone(props: IBattleZoneProps) {
  // const [players, setPlayers] = useState([]);
  const [counter, setCounter] = useState(0);

    const rollDice = (min: number, max: number) => {
        return min + Math.floor(Math.random() * (max-min + 1))
    }

    const getPlayer2 = (p1: number): number => {
        if(props.players.length > 0) {
            const tryx: number = rollDice(0, props.players.length - 1);
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


    const player1Index: number = rollDice(0, props.players.length - 1);
    const player2Index: number = getPlayer2(player1Index);

    const player1HandValue: number = rollDice(0, 2);
    const player2HandValue: number = rollDice(0, 2);

    console.log("player1Index ", player1Index);
    console.log("player2Index ", player2Index)
    
    const result = (myValue: number, enemyValue: number): boolean => {
        if((myValue - enemyValue) === 1 || (myValue - enemyValue) === -1) {
            if(myValue > enemyValue) {
                return true
            }
            return false
        }

        if(myValue === 0) {
            return true
        }
        return false
    }

    const resultView = (myValue: number, enemyValue: number) => {
        const myResult = result(myValue, enemyValue);
        const enemyResult = result(enemyValue, myValue);

        if(myResult && !enemyResult) {
            return "Win";
        }

        if(!myResult && enemyResult) {
            return "Lose";
        }
        return "Draw"
    }

    // useInterval(() => {
    //     setCount(count + 1);
    // }, delay);

    const newPlayers = [...props.players];

    const updatePlayers = (newPlayers: IPlayerValue[], player1Index: number, player2Index: number, myValue: number, enemyValue: number) => {
        const myResult = result(myValue, enemyValue);
        const enemyResult = result(enemyValue, myValue);

        if(myResult && !enemyResult) {
            
            newPlayers[player1Index].rpsWins += 1;
        }

        if(!myResult && enemyResult) {
            newPlayers[player2Index].active = false;
        }

        
    }

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
          clearInterval(timerID);
        };
    });

    function tick() {
        updatePlayers(newPlayers, player1Index, player2Index,player1HandValue, player2HandValue)
        props.onChange(newPlayers)
        setCounter(counter + 1);
    }

    if(props.players.length > 1) {
        return (
            <div className={styles.container}>
                <div>
                    <Player key="p1" player={props.players[player1Index]} />
                </div>
                <div>
                    {getSymbol(player1HandValue)}<br />
                    {player1HandValue}<br/>
                    {resultView(player1HandValue, player2HandValue)}</div>
                <div>
                    VS.<br />
                    {counter}
                </div>
                <div>
                    {getSymbol(player2HandValue)}<br />
                    {player2HandValue}<br/>
                    {resultView(player2HandValue, player1HandValue)}
                </div>
                    
                <div><Player key="p2" player={props.players[player2Index]} /></div>
        
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

//             // eslint-disable-next-line
//             // tslint:disable-next-line
//             savedCallback.current();
//       }
  
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }, [delay]);
//   }

export default BattleZone;
