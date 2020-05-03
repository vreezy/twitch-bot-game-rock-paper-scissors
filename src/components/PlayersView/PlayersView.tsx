import React from 'react';
// import { useState } from 'react';

import { PlayerView } from '../PlayerView/PlayerView';
import styles from './PlayerView.module.scss';

export interface IPlayersViewProps {
  players: PlayerView[];
}

export function PlayersView(props: IPlayersViewProps) {
  // const [players, setPlayers] = useState([]);
  


  return (
    <div className={styles.container}>
      {/* {props.players.map((player:IPlayerValue, index: number) => {
        return <Player key={"p" + index} player={player} />
      })} */}
    </div>
  );
}

export default PlayersView;
