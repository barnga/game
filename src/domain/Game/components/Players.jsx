import React, { useContext, useState } from 'react';
import { SocketContext } from '../../../contexts/Contexts';
import Player from '../../../components/Player';

const Players = () => {
  const { socket } = useContext(SocketContext) || {};
  const [players, setPlayers] = useState([]);

  if (socket) {
    socket.on('player update', (allPlayers) => setPlayers(allPlayers));
  }

  return (
    <>
      {players.map((player) => <Player data={player} key={player.id} />)}
    </>
  );
};

export default Players;
