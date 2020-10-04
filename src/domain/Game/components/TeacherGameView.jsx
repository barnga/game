import React, { useContext, useEffect, useState } from 'react';
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
import handleChangeRooms from '../scripts/handleChangeRooms';

const TeacherGameView = () => {
  const { socket } = useContext(SocketContext);
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const [selectedTab, setSelectedTab] = useState(null);

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

    const handleGameUpdate = (data) => {
      if (subscribed) {
        setGameSettings((settings) => {
          const updatedRooms = settings.rooms;
          updatedRooms[data.roomNumber - 1] = {
            ...updatedRooms[data.roomNumber - 1],
            playedCards: data.playedCards,
            // roomNumber: data.roomNumber,
            // players: data.players,
            // leaderboard: data.leaderboard,
          };

          return {
            ...settings,
            rooms: updatedRooms,
          };
        });
      }
    };

    socket.emit('get rooms', handleRoomsUpdate);
    socket.on('rooms update', handleRoomsUpdate);
    socket.on('game update', handleGameUpdate);

    return () => {
      subscribed = false;
      socket.off('rooms update', handleRoomsUpdate);
      socket.off('game update', handleGameUpdate);
    };
  }, []);

  if (!gameSettings.rooms) {
    return (
      <Container className="vh-100 d-flex align-items-center justify-content-center">
        <Loading />
      </Container>
    );
  }

  return (
    <>
      <Rulesheet isTeacher />
      <Container fluid className="d-flex vh-100 p-5 m-0">
        <Row className="d-flex w-100 m-0">
          <Col lg={3} className="d-flex h-100 flex-column">
            <GameButtons />
            <Button onClick={() => handleChangeRooms(socket)} className="mb-2">Shuffle rooms</Button>
            <Chat global />
          </Col>
          <Col className="d-flex h-100">
            <Card className="d-flex flex-grow-1 mb-0 shadow-3d h-100">
              <Tab.Container
                id="teacherGroupTabs"
                defaultActiveKey={`tab${gameSettings.rooms[0].roomId}`}
                onSelect={(eventKey) => setSelectedTab(eventKey)}
                className="d-flex h-100"
              >
                <Card.Header>
                  <Nav variant="tabs">
                    {gameSettings.rooms?.map((room, idx) => (
                      <Nav.Item key={room.roomId}>
                        <Nav.Link eventKey={`tab${room.roomId}`}>Group {idx + 1}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Card.Header>
                <Card.Body className="d-flex h-75">
                  <Tab.Content className="d-flex w-100 h-100">
                    {gameSettings.rooms?.map((room) => (
                      <Tab.Pane
                        eventKey={`tab${room.roomId}`}
                        key={room.roomId}
                        className="h-100 w-100 p-1"
                        style={{ display: selectedTab !== `tab${room.roomId}` ? 'none !important' : 'flex !important' }}
                      >
                        <TeacherGroupView room={room} selectedTab={selectedTab} />
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
