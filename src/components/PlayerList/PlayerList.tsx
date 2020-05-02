import React from 'react';
// import { useState } from 'react';

import { Player } from '../Player/Player';
import styles from './PlayerList.module.scss';

export interface IPlayerListProps {
  players: [];
  
}

export function PlayerList(props: any) {
  // const [players, setPlayers] = useState([]);
  


  return (
    <div className={styles.container}>
      {props.players.map((player:any) => {
        return <Player player={player} />
      })}
    </div>
  );
}

export default PlayerList;
