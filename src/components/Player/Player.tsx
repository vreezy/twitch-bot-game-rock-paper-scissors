import React from 'react';
// import { useState } from 'react';

import styles from './Player.module.scss'; 
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

import { IUser } from '../../interfaces/IUser';
export interface IUserComp {
  player: IUser;
}


export function Player(props: IUserComp) {
  // const [players, setPlayers] = useState([]);
  
  // console.log(props.player)

  if(props.player && props.player["display-name"]) {
    return (
      <div className={styles.player}>
        {props.player["display-name"]}
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
