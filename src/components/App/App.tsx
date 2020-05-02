import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import { PlayerList } from '../PlayerList/PlayerList';

import { BattleZone } from '../BattleZone/BattleZone';

import { IPlayer } from '../../interfaces/IPlayer';

// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

function App() {
  const initUser: IPlayer[] = []
  const [players, setPlayers] = useState(initUser);
  
  useEffect(() => {
    async function loadContent() {
      const response = await fetch('http://localhost:8080');
      const json = await response.json();
      setPlayers(json);
    }
    loadContent();
  }, []);


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
