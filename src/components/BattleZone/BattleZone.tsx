import React from 'react';
import { useState, useEffect } from 'react';

import styles from './BattleZone.module.scss'; 

import { Player } from '../../models/Player';
import { Players } from '../../models/Players';

import { GameService } from '../../services/GameService';


export interface IBattleZoneProps {
    players: Players;
    // onChange(players: IPlayerValue[]) : void;
}


export function BattleZone(props: IBattleZoneProps) {
    // const [players, setPlayers] = useState([]);
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState(10000);

    const players: Players = props.players.clone();
    const player1: Player | null = players.getRandomActivePlayer();
    const player2: Player | null = player1 !== null ? players.getRandomActivePlayer([player1]): null;

    // console.log(props.players.length())
    console.log("Player1: ", player1)
    console.log("player2: ", player2)
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



    const player1HandValue: number = GameService.rollDice(0, 2);
    const player2HandValue: number = GameService.rollDice(0, 2);

    
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



    useEffect(() => {
        var timerID = setInterval( () => tick(), time );
        return function cleanup() {
          clearInterval(timerID);
        };
    });

    function tick() {
        
        // props.onChange(newPlayers)
        setCounter(counter + 1);
        if(player1 !== null && player2 !== null) {
            if(player1HandValue !== player2HandValue) {
                if(result(player1HandValue, player2HandValue)) {
                    player1.win()
                    player2.deActivate();
                }
                else {
                    player2.win()
                    player1.deActivate();
                }
            }
            // player1.win();
        }
        else {
            setTime(100000);
        }
    }

    if(player1 !== null && player2 !== null ) {
        return (

            <div>
                Aktive Spieler
                <div className={styles.playersContainer}>
                    {players.renderOnlyActive()}
                </div>

                <br /><br />
                Kampfzone
                <div className={styles.container}>
                    <div>
                        {player1.render()}
                    </div>
                    <div>

                        {getSymbol(player1HandValue)}<br />
                        {/* {player1HandValue}<br/> */}
                        {resultView(player1HandValue, player2HandValue)} 
                    </div>
                    <div>
                        VS.<br />
                        {counter}
                    </div>
                    <div>

                        {getSymbol(player2HandValue)}<br />
                        {/* {player2HandValue}<br/> */}
                        {resultView(player2HandValue, player1HandValue)} 
                    </div>
                        
                    <div>
                        {player2.render()}    
                    </div>
            
                </div>
            </div>
        );
    }

    return (
        <div>
            Gewinner

            <div className={styles.playersContainer}>
                
                {players.renderWinner()}
            </div>
        </div>
    )
}

export default BattleZone;