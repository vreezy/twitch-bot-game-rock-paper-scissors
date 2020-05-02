import React from 'react';
// import { useState } from 'react';

import styles from './Player.module.scss'; 
// https://reactjs.org/docs/hooks-faq.html#how-can-i-do-data-fetching-with-hooks


//  {
//    "badge-info": null,
//    "badges": {
//      "broadcaster": "1"
//    },
//    "color": null,
//    "display-name": "vreezyDE",
//    "emotes": null,
//    "flags": null,
//    "id": "0a22ee7f-b576-4e80-bae4-637eba68d102",
//    "mod": false,
//    "room-id": "191308898",
//    "subscriber": false,
//    "tmi-sent-ts": "1588449636454",
//    "turbo": false,
//    "user-id": "191308898",
//    "user-type": null,
//    "emotes-raw": null,
//    "badge-info-raw": null,
//    "badges-raw": "broadcaster/1",
//    "username": "vreezyde",
//    "message-type": "chat"
//  }

export function Player(props: any) {
  // const [players, setPlayers] = useState([]);
  


  return (
    <div className={styles.player}>
      {props.player["display-name"]}
    </div>
  );
}

export default Player;
