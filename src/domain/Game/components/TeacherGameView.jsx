import React, { useContext, useEffect } from 'react';
import {
  Col, Container, Row, Tab, Button, Card, Nav,
} from 'react-bootstrap';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import Loading from '../../../components/Loading';
import GameButtons from '../../../components/GameButtons';
import Chat from '../../../components/Chat/Chat';
import TeacherGroupView from './TeacherGroupView';
import Rulesheet from '../../../components/Rulesheet/Rulesheet';
import withStrokes from '../../../hocs/withStrokes';

const TeacherGameView = () => {
  const { socket } = useContext(SocketContext);
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    const handleRoomsUpdate = (data) => {
      if (subscribed) {
        setGameSettings((settings) => ({
          ...settings,
          rooms: data.rooms,
          messages: [],
          roomMessages: {},
          roomStrokes: {},
        }));
      }
    };

    socket.emit('get rooms', handleRoomsUpdate);

    return () => (subscribed = false);
  }, []);

  if (!gameSettings.rooms) {
    return (
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
        <Loading />
      </Container>
    );
  }

  return (
    <>
      <Rulesheet isTeacher />
      <Container fluid className="vh-100 d-flex flex-column justify-content-center p-5 m-0">
        <Row className="h-100 m-0">
          <Col lg={3} className="h-100 d-flex flex-column">
            <GameButtons />
            <Button onClick={() => socket.emit('change rooms')} className="mb-2">Change rooms</Button>
            <Chat global />
          </Col>
          <Col className="h-100 d-flex flex-column">
            <Card className="shadow-3d h-100 d-flex flex-grow-1 mb-0">
              <Tab.Container id="teacherGroupTabs" defaultActiveKey={`tab${gameSettings.rooms[0].roomId}`}>
                <Card.Header>
                  <Nav variant="tabs">
                    {gameSettings.rooms?.map((room, idx) => (
                      <Nav.Item key={room.roomId}>
                        <Nav.Link eventKey={`tab${room.roomId}`}>Group {idx + 1}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    {gameSettings.rooms?.map((room) => (
                      <Tab.Pane eventKey={`tab${room.roomId}`} key={room.roomId} className="p-1">
                        <TeacherGroupView room={room} />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Card.Body>
              </Tab.Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withStrokes(TeacherGameView);
