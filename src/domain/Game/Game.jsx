import React, { useContext } from 'react';
import { useParams, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import withSocket from '../../hocs/withSocket';
import useNamespace from '../../hooks/useNamespace';
import Players from './components/Players';
import { SocketContext } from '../../contexts/Contexts';

const Game = ({ history }) => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext) || {};
  useNamespace(`http://localhost:3000/${gameId}`);

  if (socket) {
    socket.on('redirect to join', () => {
      history.push('/play');
    });
    socket.on('404', (data) => {
      console.log(data);
      history.push('/notfound');
    });
  }

  return (
    <div>
      <h1>Game ID: {gameId}</h1>
      <Players />
    </div>
  );
};

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(Game));
