import React, { useContext, useState } from 'react';
import { SocketContext } from '../contexts/Contexts';
import Player from './Player';
import Svg from './Svg';
import gamepad from '../assets/img/icons/theme/devices/gamepad-2.svg';

const Players = () => {
  const { socket } = useContext(SocketContext) || {};
  const [players, setPlayers] = useState([]);

  // TODO: Wrap all socket events in useEffect for cleanup
  if (socket) {
    socket.on('player update', (allPlayers) => setPlayers(allPlayers));
  }

  if (players.length === 0) {
    return (
      <div className="d-flex flex-column align-items-center pt-5">
        <Svg src={gamepad} classNames="icon" alt="decoration" />
        <h5>No players yet</h5>
      </div>
    );
  }

  return (
    <div>
      <h5>{players.length} {players.length === 1 ? 'player' : 'players'}</h5>
      <div className="d-flex flex-column align-items-center pt-2">
        {players.map((player) => <Player data={player} key={player.id} />)}
      </div>
    </div>
  );
};

export default Players;
