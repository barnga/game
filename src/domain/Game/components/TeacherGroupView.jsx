import React, { useContext } from 'react';
import {
  Card, Col, Row, ListGroup, Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Chat from '../../../components/Chat/Chat';
import GameCanvas from '../../../components/GameCanvas/GameCanvas';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import handleStartNewRound from '../scripts/handleStartNewRound';

const TeacherGroupView = ({ room }) => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  const clear = () => {
    setGameSettings((settings) => {
      const { roomStrokes } = settings;
      roomStrokes[room.roomId] = {};

      return ({
        ...settings,
        roomStrokes,
      });
    });
  };

  return (
    <Row className="h-100 p-1">
      <Col lg={3} xl={4} className="h-100 d-flex flex-column col-12 p-1">
        <Card className="d-flex flex-grow-1 m-0 p-0 h-25 mb-2">
          <Card.Body className="d-flex flex-column">
            <Card.Title className="px-1">Players</Card.Title>
            <ListGroup variant="flush">
              {Object.entries(room.players).map((player) => {
                const [playerId, playerData] = player;
                return (
                  <ListGroup.Item key={playerId}>{playerData.nickname}</ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Body>
        </Card>
        <Chat roomId={room.roomId} admin />
      </Col>
      <Col lg={9} xl={8} className="col-12">
        <Row className="h-100 d-flex flex-row">
          <Col className="h-100 d-flex flex-column">
            <GameCanvas roomId={room.roomId} teacherView />
          </Col>
        </Row>
        <Row className="d-flex flex-row justify-content-center">
          <Col>
            <Button
              block
              variant="outline-primary"
              onClick={() => handleStartNewRound(socket, room.roomId)}
            >
              Redeal Cards
            </Button>
            <Button
              block
              variant="outline-primary"
              onClick={clear}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

TeacherGroupView.propTypes = {
  room: PropTypes.any,
};

export default TeacherGroupView;
