import React from 'react';
import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
// import player from '../../assets/player3.svg'; 
import { ReactComponent as Player } from '../../assets/player3.svg'; 

import styles from './PlayerView.module.scss'; 
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks


export interface IPlayerView {
  displayName: string;
  wins: number;
}


export function PlayerView(props: IPlayerView) {
    const playerSVG = useRef(null);
    // return (
    //   <div className={styles.player}>
    //     {props.displayName}<br />
    //     {props.wins}<br />
    //     {/* {props.player.rpsWins}<br />
    //     {props.player.active ? "active": "inactve"} */}
    //     {/* {JSON.stringify(props.player.username)} */}
    //   </div>
    // );

 

    useEffect(() => {
      if(playerSVG) {
        // const playerimage = document.getElementById();
        // @ts-ignore
        // playerSVG.current.focus()
        ReactDOM.findDOMNode(playerSVG)
        // const playerimage = document.getElementById(playerSVG.current);
        // if(playerimage !== null) {
        //   // @ts-ignore
        //   playerimage.getElementById("tspan2157").textContent = "Hallo Welt";
        //   // playerlevel
        //   // @ts-ignore
        //   playerimage.getElementById("tspan2157-9").textContent = "1";
        //   // playerwins
        //   // @ts-ignore
        //   playerimage.getElementById("tspan2157-9-9").textContent = "0";
        // }
      }
    }, [playerSVG]) 

    return (
      <div className="container">
        {/* 
        @ts-ignore */}
        <Player />
        {/* <img src={player} className="player" id="playerimage" ref={playerSVG} alt="Player box"/> */}
      
     
   <div className="char">
       qefqefqef qefqe qefq
   </div>
  </div>
    )



}

export default PlayerView;
