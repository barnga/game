import React, { useContext, useState } from 'react';
import { useParams, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import withSocket from '../../hocs/withSocket';
import useNamespace from '../../hooks/useNamespace';
import { SocketContext } from '../../contexts/Contexts';
import WaitingRoom from './components/WaitingRoom';
import Loading from '../../components/Loading';

const Game = ({ history }) => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext) || {};
  useNamespace(`http://localhost:3000/${gameId}`);
  const [isLoaded, setIsLoaded] = useState(false);

  if (socket) {
    socket.on('redirect to join', () => {
      history.push('/play');
    });
    socket.on('404', () => {
      history.push('/notfound');
    });
    socket.on('200', () => setIsLoaded(true));
  }

  if (!isLoaded) {
    return (
      <Container className="d-flex min-vh-100 align-items-center justify-content-center">
        <Loading />
      </Container>
    );
  }

  return <WaitingRoom />;
};

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(Game));
