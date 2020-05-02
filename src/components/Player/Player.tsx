import React from 'react';
// import { useState } from 'react';

import styles from './Player.module.scss'; 
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

import { IPlayer } from '../../interfaces/IPlayer';
export interface IPlayerComp {
  player: IPlayer;
}


export function Player(props: IPlayerComp) {
  // const [players, setPlayers] = useState([]);
  
  // console.log(props.player)

  return (
    <div className={styles.player}>
      {props.player["display-name"]}
      {/* {JSON.stringify(props.player.username)} */}
    </div>
  );
}

export default Player;
