import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import {
  Alert, Button, Col, Container, Row,
} from 'react-bootstrap';
import Players from '../../../components/Players';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import handleStartGame from '../scripts/handleStartGame';
import JoinLink from './JoinLink';

const WaitingRoom = () => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const { isTeacher } = gameSettings || {};

  const [showError, setShowError] = useState(false);
  const [disableStartGame, setDisableStartGame] = useState(false);

  return (
    <section className="pb-0 pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-10 col-xl-8">
            <div className="d-flex w-100 justify-content-between">
              <h1>Game ID: {gameId}</h1>
              {isTeacher && (
                <Row className="w-50 align-items-center">
                  <Col>
                    <JoinLink />
                  </Col>
                  <Col>
                    <Button
                      block
                      disabled={disableStartGame}
                      onClick={() => {
                        setDisableStartGame(true);
                        handleStartGame(socket)
                          .then((hasMinimumPlayers) => {
                            setShowError(!hasMinimumPlayers);
                            setDisableStartGame(false);
                          });
                      }}
                    >
                      Start
                    </Button>
                  </Col>
                </Row>
              )}
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
              {showError && (
                <Alert variant="danger" className="w-100" onClose={() => setShowError(false)} dismissible>
                  Not enough players to start the game.
                </Alert>
              )}
              <Players />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WaitingRoom;
