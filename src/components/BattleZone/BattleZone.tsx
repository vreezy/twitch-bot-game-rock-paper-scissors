import React from 'react';
import { useState, useEffect } from 'react';

import styles from './BattleZone.module.scss'; 

import { Player } from '../../models/Player';
import { Players } from '../../models/Players';

import { GameService } from '../../services/GameService';

import rock_left from '../../assets/rock_left.jpg'
import rock_right from '../../assets/rock_right.jpg'

import paper_left from '../../assets/paper_left.jpg'
import paper_right from '../../assets/paper_right.jpg'

import scissors_left from '../../assets/scissors_left.jpg'
import scissors_right from '../../assets/scissors_right.jpg'



export interface IBattleZoneProps {
    players: Players;
    onChange(players: Players) : void;
}


export function BattleZone(props: IBattleZoneProps) {
    // const [players, setPlayers] = useState([]);
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState(10000);

    const players: Players = props.players.clone();
    console.log("PLAYERS: ", players.toString())
    const player1: Player | null = players.getRandomActivePlayer();
    const player2: Player | null = player1 !== null ? players.getRandomActivePlayer([player1]): null;

    // console.log(props.players.length())
    // console.log("Player1: ", player1)
    // console.log("player2: ", player2)


    const getSymbol = (value: number) => {
        switch(value) {
            case 0:
                return rock_left;
            case 1:
                return paper_left;
            default:
            case 2:
                return scissors_left;
        }
    }

    const getSymbolRight = (value: number) => {
        switch(value) {
            case 0:
                return rock_right;
            case 1:
                return paper_right;
            default:
            case 2:
                return scissors_right;
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


            props.onChange(players);
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

                        <img src={getSymbol(player1HandValue)} alt="Symbol" className={styles.image}/>
                        {/* {player1HandValue}<br/> */}
                        {/* {resultView(player1HandValue, player2HandValue)}  */}
                    </div>
                    <div>
                        VS.<br />
                        {counter}
                    </div>
                    <div>

                        <img src={getSymbolRight(player2HandValue)} alt="Symbol" className={styles.image}/>
                        {/* {player2HandValue}<br/> */}
                        {/* {resultView(player2HandValue, player1HandValue)}  */}
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