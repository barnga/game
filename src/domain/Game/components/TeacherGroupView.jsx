import React from 'react';
import {
  Card, Col, Row, ListGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Chat from '../../../components/Chat/Chat';
import GameCanvas from '../../../components/GameCanvas/GameCanvas';
import ClearButton from '../../../components/GameCanvas/components/ClearButton';

const TeacherGroupView = ({ room }) => (
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
          <ClearButton roomId={room.roomId} teacher />
        </Col>
      </Row>
    </Col>
  </Row>
);

TeacherGroupView.propTypes = {
  room: PropTypes.any,
};

export default TeacherGroupView;
