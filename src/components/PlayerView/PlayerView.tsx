import React from 'react';
// import { useState } from 'react';

import styles from './PlayerView.module.scss'; 
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks


export interface IPlayerView {
  displayName: string
}


export function PlayerView(props: IPlayerView) {

    return (
      <div className={styles.player}>
        {props.displayName}<br />
        {/* {props.player.rpsWins}<br />
        {props.player.active ? "active": "inactve"} */}
        {/* {JSON.stringify(props.player.username)} */}
      </div>
    );



}

export default PlayerView;
