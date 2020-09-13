import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Col, Container, Row, Button,
} from 'react-bootstrap';
import { SliderPicker } from 'react-color';
import Chat from '../../../components/Chat/Chat';
import Leaderboard from '../../../components/Leaderboard';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import GameCanvas from '../../../components/GameCanvas/GameCanvas';
import GameButtons from '../../../components/GameButtons';
import Rulesheet from '../../../components/Rulesheet/Rulesheet';
import VotingModal from '../../../components/VotingModal/VotingModal';

const PlayerGameView = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const brushColor = useRef('#000000');

  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const containerRef = useRef(null);

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
      <Container fluid className="min-vh-100 d-flex flex-column justify-content-center p-0 m-0">
        <Row className="min-vh-100 m-0 p-5">
          <Col className="d-flex flex-column col-12 col-lg-3">
            <GameButtons />
            <Leaderboard />
            <Chat />
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="min-vh-90" ref={containerRef}>
              <Col className="col-12 col-lg-9">
                <GameCanvas containerRef={containerRef} brushColorRef={brushColor} />
              </Col>
            </Row>
            <Row className="min-vh-10">
              <Col className="col-12 col-lg-9">
                <SliderPicker color="#000000" onChange={(color) => brushColor.current = color.hex} className="my-2 w-100" />
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
