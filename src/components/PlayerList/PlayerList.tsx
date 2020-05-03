import React from 'react';
// import { useState } from 'react';

import { Player } from '../Player/Player';
import styles from './PlayerList.module.scss';

import { IPlayerValue } from '../../interfaces/IPlayerValue';
export interface IUserListProps {
  players: IPlayerValue[];
  
}

export function PlayerList(props: IUserListProps) {
  // const [players, setPlayers] = useState([]);
  


  return (
    <div className={styles.container}>
      {props.players.map((player:IPlayerValue, index: number) => {
        return <Player key={"p" + index} player={player} />
      })}
    </div>
  );
}

export default PlayerList;
