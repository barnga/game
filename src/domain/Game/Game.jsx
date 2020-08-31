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

  // useEffect(() => {
  //   const handleJoin = () => history.push('/play');
  //   const handleGameNotFound = () => history.push('/notfound');
  //   const handleGameFound = () => setIsLoaded(true);
  //   const handleGameStart = () => setIsGameStarted(true);
  //
  //   if (socket) {
  //     socket.on('redirect to join', handleJoin);
  //     socket.on('404', handleGameNotFound);
  //     socket.on('200', handleGameFound);
  //     socket.on('game started', handleGameStart);
  //   }
  //
  //   return () => {
  //     if (socket) {
  //       socket.off('redirect to join', handleJoin);
  //       socket.off('404', handleGameNotFound);
  //       socket.off('200', handleGameFound);
  //       socket.off('game started', handleGameStart);
  //     }
  //   };
  // }, [socket]);
  //
  // useEffect(() => {
  //   setGameSettings((settings) => ({
  //     ...settings,
  //     isTeacher: location.state?.isTeacher || false,
  //   }));
  // }, [location]);
  //
  // if (!isLoaded) {
  //   return (
  //     <Container className="d-flex min-vh-100 align-items-center justify-content-center">
  //       <Loading />
  //     </Container>
  //   );
  // }
  //
  // if (!isGameStarted) {
  //   return <WaitingRoom />;
  // }
  //
  // if (isTeacher) {
  //   return <TeacherGameView />;
  // }

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
