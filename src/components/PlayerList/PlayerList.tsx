import React from 'react';
// import { useState } from 'react';

import { Player } from '../Player/Player';
import styles from './PlayerList.module.scss';

import { IPlayer } from '../../interfaces/IPlayer';
export interface IPlayerListProps {
  players: IPlayer[];
  
}

export function PlayerList(props: IPlayerListProps) {
  // const [players, setPlayers] = useState([]);
  


  return (
    <div className={styles.container}>
      {props.players.map((player:IPlayer, index: number) => {
        return <Player key={"p" + index} player={player} />
      })}
    </div>
  );
}

export default PlayerList;
