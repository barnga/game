import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Col, Container, Row, Button,
} from 'react-bootstrap';
import Chat from '../../../components/Chat/Chat';
import Leaderboard from '../../../components/Leaderboard';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import GameCanvas from '../../../components/GameCanvas/GameCanvas';
import GameButtons from '../../../components/GameButtons';
import Rulesheet from '../../../components/Rulesheet/Rulesheet';
import VotingModal from '../../../components/VotingModal/VotingModal';
import ColorPicker from './ColorPicker';

const PlayerGameView = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const brushColor = useRef(`hsl(${Math.floor(Math.random() * 360)}, 50, 50)`);

  const [isGameLoaded, setIsGameLoaded] = useState(false);

  const setColor = (color) => brushColor.current = color;

  useEffect(() => {
    let subscribed = true;

    const handleRoomJoin = (data) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          roomNumber: data.roomNumber,
          rulesheetId: data.rulesheetId,
          hand: data.hand,
          turn: data.turn,
          leaderboard: data.leaderboard,
          roundSettings: data.roundSettings,
          messages: [],
          strokes: {},
          showRules: true,
        }));
        setIsGameLoaded(true);
      }
    };

    const handleGameUpdate = (data) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          roomNumber: data.roomNumber,
          players: data.players,
          playedCards: data.playedCards,
          turn: data.turn,
          leaderboard: data.leaderboard,
          roundSettings: data.roundSettings,
          hand: data.players[localStorage.sessionId].hand,
          showVoting: data.showVoting,
        }));
      }
    };

    socket.emit('joined room', handleRoomJoin);
    socket.on('game update', handleGameUpdate);

    return () => {
      subscribed = false;
      socket.off('joined room', handleRoomJoin);
      socket.off('game update', handleGameUpdate);
    };
  }, []);

  if (!isGameLoaded) {
    return <></>;
  }

  return (
    <>
      <Rulesheet />
      <VotingModal />
      <Container fluid className="vh-100 d-flex flex-column justify-content-center p-5 m-0">
        <Row className="h-100">
          <Col className="h-100 d-flex flex-column col-12 col-lg-3">
            <GameButtons />
            <Leaderboard />
            <Chat />
          </Col>
          <Col className="h-100 d-flex flex-column col-12 col-lg-9">
            <Row className="h-100 d-flex flex-row">
              <Col className="h-100 d-flex flex-column">
                <GameCanvas brushColorRef={brushColor} />
              </Col>
            </Row>
            <Row className="d-flex flex-row justify-content-center">
              <Col>
                <ColorPicker setColor={setColor} />
                <Button
                  block
                  variant="outline-primary"
                  onClick={() => {
                    setGameSettings((settings) => ({
                      ...settings,
                      strokes: {},
                    }));
                  }}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlayerGameView;
