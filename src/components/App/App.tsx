import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { PlayerList } from '../PlayerList/PlayerList';

import { BattleZone } from '../BattleZone/BattleZone';

import { IUser } from '../../interfaces/IUser';

import { Player } from '../../models/Player'     // Component
import { Players } from '../../models/Players'   // Composite

// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

function App() {
  
  const [players, setPlayers] = useState({});

  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    async function loadContent() {
      const response = await fetch('http://localhost:8080');
      const users: IUser[] = await response.json();

      const players = new Players();

      users.forEach((user: IUser) => {
        players.add(new Player(user["user-id"], user["display-name"]))
      })
      
      setPlayers(players);
      setLoading(false);
    }
    if(loading) {
      loadContent();
    }
  }, [loading]);

  if(loading) {
    return (
      <div>
        LOADING...
      </div>
    )
  }

  // const updatePlayers = (players: IPlayerValue[]) => {
  //   const activePlayer = players.filter((player: IPlayerValue) => {
  //     return player.active ? true : false;
  //   })
  //   setActivePlayers(activePlayer)
  // }


  // const ZoneOrAward = () => {

  //   const activePlayers = players.filter((player: IPlayerValue) => {
  //     return player.active ? true : false;
  //   })

  //   if(activePlayers.length > 1) {
  //     return (
  //       <div>
  //         in Runde:
  //         <PlayerList players={activePlayers} />

  //         BattleZone:
  //         <BattleZone players={players} onChange={(players) => setPlayers(players)} />
  //       </div>
  //     ) 
  //   }
  
  //   return (<div>"AWARD CEROMENY"</div> );
  // }

  return (

    <div>
      Rock Paper Scissors
      <br />
      Alle
      <PlayerList players={players} /> 


       
      <br /><br />

      <ZoneOrAward />
     

    </div>

  );
}

export default App;

