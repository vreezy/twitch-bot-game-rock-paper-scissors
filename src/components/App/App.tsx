import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import { PlayerList } from '../PlayerList/PlayerList';

// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks

function App() {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    async function loadContent() {
      const response = await fetch('http://localhost:8080');
      const json = await response.json();
      console.log(json)
      setPlayers(json);
    }
    loadContent();
  }, []);


  return (
    <div>
      Rock Paper Scissors

      <PlayerList players={players} />

    </div>
  );
}

export default App;
