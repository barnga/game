import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import {
  Alert, Button, Col, Container, Row,
} from 'react-bootstrap';
import Players from '../../../components/Players';
import { SocketContext } from '../../../contexts/Contexts';
import handleStartGame from '../scripts/handleStartGame';

const WaitingRoom = () => {
  const { socket } = useContext(SocketContext) || {};
  const { gameId } = useParams();
  const [showError, setShowError] = useState(false);
  const isTeacher = localStorage.role === 'teacher';

  return (
    <section className="pb-0 pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-10 col-xl-8">
            <div className="d-flex w-100 justify-content-between">
              <h1>Game ID: {gameId}</h1>
              {isTeacher && (
                <Button onClick={() => handleStartGame(socket)
                  .then((hasMinimumPlayers) => setShowError(!hasMinimumPlayers))}
                >
                  Start game
                </Button>
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
