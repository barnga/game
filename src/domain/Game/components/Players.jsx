import React, { useContext, useState } from 'react';
import { SocketContext } from '../../../contexts/Contexts';
import Player from '../../../components/Player';

const Players = () => {
  const { socket } = useContext(SocketContext) || {};
  const [players, setPlayers] = useState([]);

  if (socket) {
    socket.on('update', (players) => {
      // setPlayers((currentPlayers) => currentPlayers.concat(player));
      console.log(players);
    });
  }

  // return (
  //   <>
  //     {players.map((player) => <Player data={player} />)}
  //   </>
  // );

  return (
    <p>test</p>
  );
};

export default Players;
