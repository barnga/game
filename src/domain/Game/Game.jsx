import React, { useContext } from 'react';
import { useParams } from 'react-router';
import withSocket from '../../hocs/withSocket';
import useNamespace from '../../hooks/useNamespace';
import Players from './components/Players';
import { SocketContext } from '../../contexts/Contexts';

const Game = () => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext) || {};
  useNamespace(`http://localhost:3000/${gameId}`);

  if (socket) {
    socket.on('404', (data) => {
      console.log(data);
    });
  }

  return (
    <div>
      <h1>Game ID: {gameId}</h1>
      <Players />
    </div>
  );
};

export default withSocket(Game);
