import React from 'react';
import {
  Card, Col, Row, ListGroup, Container,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Chat from '../../../components/Chat/Chat';
import GameCanvas from '../../../components/GameCanvas/GameCanvas';
import ClearButton from '../../../components/GameCanvas/components/ClearButton';
import NewRoundButton from '../../../components/GameCanvas/components/NewRoundButton';

const TeacherGroupView = ({ room, selectedTab }) => (
  <Container fluid className="d-flex h-100">
    <Row className="d-flex w-100 h-100">
      <Col lg={3} xl={4} className="d-flex flex-column col-12 p-1 h-100">
        <Card className="p-0 m-0 mb-2 w-100">
          <Card.Body>
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
        <NewRoundButton roomId={room.roomId} />
        <ClearButton roomId={room.roomId} teacher />
        <GameCanvas roomId={room.roomId} teacherView selectedTab={selectedTab} />
      </Col>
    </Row>
  </Container>
);

TeacherGroupView.propTypes = {
  room: PropTypes.any,
  selectedTab: PropTypes.any,
};

export default TeacherGroupView;
