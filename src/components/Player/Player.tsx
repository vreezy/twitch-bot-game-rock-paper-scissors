import React from 'react';
// import { useState } from 'react';

import styles from './Player.module.scss'; 
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

import { IPlayerValue } from '../../interfaces/IPlayerValue';
export interface IPlayer {
  player: IPlayerValue;
}


export function Player(props: IPlayer) {
  // const [players, setPlayers] = useState([]);
  
  // console.log(props.player)

  if(props.player && props.player["display-name"]) {
    return (
      <div className={styles.player}>
        {props.player["display-name"]}<br />
        {props.player.rpsWins}<br />
        {props.player.active ? "active": "inactve"}
        {/* {JSON.stringify(props.player.username)} */}
      </div>
    );
  }

  return (
    <div>
      Is Empty
    </div>
  )
}

export default Player;
