import React from 'react';
import { useParams } from 'react-router';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Players from './Players';

const WaitingRoom = () => {
  const { gameId } = useParams();
  const isTeacher = localStorage.role === 'teacher';

  return (
    <section className="pb-0 pb-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-lg-10 col-xl-8">
            <div className="d-flex w-100 justify-content-between">
              <h1>Game ID: {gameId}</h1>
              {isTeacher && <Button>Start game</Button>}
            </div>
            <hr />
            <div className="d-flex justify-content-center align-items-center">
              <Players />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WaitingRoom;
