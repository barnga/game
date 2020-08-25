import React, { useContext, useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import withSocket from '../../hocs/withSocket';
import useNamespace from '../../hooks/useNamespace';
import { GameContext, SocketContext } from '../../contexts/Contexts';
import WaitingRoom from './components/WaitingRoom';
import Loading from '../../components/Loading';
import PlayerGameView from './components/PlayerGameView';
import withGame from '../../hocs/withGame';
import TeacherGameView from './components/TeacherGameView';

const Game = ({ history, location }) => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const { isTeacher } = gameSettings || {};
  useNamespace(`http://localhost:3000/${gameId}`);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (socket) {
      socket.on('redirect to join', () => {
        history.push('/play');
      });
      socket.on('404', () => {
        history.push('/notfound');
      });
      socket.on('200', () => setIsLoaded(true));
      socket.on('game started', () => setIsGameStarted(true));
    }
  }, [socket]);

  useEffect(() => {
    setGameSettings((settings) => ({
      ...settings,
      isTeacher: location.state?.isTeacher || false,
    }));
  }, [location]);

  if (!isLoaded) {
    return (
      <Container className="d-flex min-vh-100 align-items-center justify-content-center">
        <Loading />
      </Container>
    );
  }

  if (!isGameStarted) {
    return <WaitingRoom />;
  }

  if (isTeacher) {
    return <TeacherGameView />;
  }

  return <PlayerGameView />;
};

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
};

export default withRouter(withGame(withSocket(Game)));
