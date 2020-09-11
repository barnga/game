import React, { useRef } from 'react';
import {
  Card, Col, Row, ListGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Chat from '../../../components/Chat/Chat';

const TeacherGroupView = ({ room }) => {
  const containerRef = useRef(null);
  return (
    <Row className="min-vh-90" ref={containerRef}>
      <Col className="d-flex flex-column col-12 col-lg-3 pt-1">
        <Card className="d-flex flex-grow-1 m-0 p-0 h-25 mb-1">
          <Card.Body className="d-flex flex-column p-0">
            <Card.Title className="p-3">Players</Card.Title>
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
      <Col className="col-12 col-lg-9">
        <div>Boaner!</div>
        {/* <GameCanvas containerRef={containerRef} teacherView /> */}
      </Col>
    </Row>
  );
};

TeacherGroupView.propTypes = {
  room: PropTypes.any,
};

export default TeacherGroupView;
