import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { PlayerList } from '../PlayerList/PlayerList';

import { BattleZone } from '../BattleZone/BattleZone';

import { IUser } from '../../interfaces/IUser';
import { IPlayerValue } from '../../interfaces/IPlayerValue';

// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

function App() {
  const initUser: IPlayerValue[] = []
  const [players, setPlayers] = useState(initUser);

  const [loading, setLoading] = useState(true);

  const getPlayers = (users: IUser[]): IPlayerValue[] => {
    // get user data from DATABASE 

    const players: IPlayerValue[] = users.map((user: IUser) => {
      const player: IPlayerValue = Object.assign({}, user) as IPlayerValue;
      player["active"] = true;
      player["rpsWins"] = 0;
      return player;
    });

    return players

  }

  
  useEffect(() => {
    async function loadContent() {
      const response = await fetch('http://localhost:8080');
      const user: IUser[] = await response.json();
      
      setPlayers(getPlayers(user));
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


  const ZoneOrAward = () => {

    const activePlayers = players.filter((player: IPlayerValue) => {
      return player.active ? true : false;
    })

    if(activePlayers.length > 1) {
      return (
        <div>
          in Runde:
          <PlayerList players={activePlayers} />

          BattleZone:
          <BattleZone players={players} onChange={(players) => setPlayers(players)} />
        </div>
      ) 
    }
  
    return (<div>"AWARD CEROMENY"</div> );
  }

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

