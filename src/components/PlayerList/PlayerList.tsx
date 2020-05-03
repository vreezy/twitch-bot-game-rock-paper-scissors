import React from 'react';
// import { useState } from 'react';

import { Player } from '../Player/Player';
import styles from './PlayerList.module.scss';

import { IUser } from '../../interfaces/IUser';
export interface IUserListProps {
  players: IUser[];
  
}

export function PlayerList(props: IUserListProps) {
  // const [players, setPlayers] = useState([]);
  


  return (
    <div className={styles.container}>
      {props.players.map((player:IUser, index: number) => {
        return <Player key={"p" + index} player={player} />
      })}
    </div>
  );
}

export default PlayerList;
