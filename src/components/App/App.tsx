import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.scss';

import { PlayerList } from '../PlayerList/PlayerList';

import { BattleZone } from '../BattleZone/BattleZone';

import { IUser } from '../../interfaces/IUser';

// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

function App() {
  const initUser: IUser[] = []
  const [players, setPlayers] = useState(initUser);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadContent() {
      const response = await fetch('http://localhost:8080');
      const json = await response.json();
      setPlayers(json);
      setLoading(false);
    }
    loadContent();
  }, []);

  if(loading) {
    return (
      <div>
        LOADING...
      </div>
    )
  }

  return (

    <div>
      Rock Paper Scissors

      <PlayerList players={players} /> 

      <br /><br />

      <BattleZone players={players} />

    </div>

  );
}

export default App;
