import React, { useContext, useEffect } from 'react';
import {
  Col, Container, Row, Tabs, Tab,
} from 'react-bootstrap';
import { useParams } from 'react-router';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import Loading from '../../../components/Loading';
import GameButtons from '../../../components/GameButtons';
import Chat from '../../../components/Chat/Chat';
import TeacherGroupView from './TeacherGroupView';
import Rulesheet from '../../../components/Rulesheet/Rulesheet';

const TeacherGameView = () => {
  const { gameId } = useParams();
  const { socket } = useContext(SocketContext);
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  useEffect(() => {
    let subscribed = true;

    const handleRoomsUpdate = (data) => {
      console.log(data);
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
      <Rulesheet teacher />
      <Container fluid className="min-vh-100 d-flex flex-column justify-content-center p-0 m-0">
        <Row className="vh-10 p-2 pt-5">
          <p className="h1">Game ID: {gameId}</p>
        </Row>
        <Row className="min-vh-90 m-0 p-5">
          <Col className="d-flex flex-column col-12 col-lg-3">
            <GameButtons />
            <Chat global />
          </Col>
          <Col className="col-12 col-lg-9">
            <Tabs id="gameViewTabs">
              {gameSettings.rooms?.map((room, idx) => (
                <Tab eventKey={room.roomId} title={`Group ${idx + 1}`} key={room.roomId}>
                  <TeacherGroupView room={room} />
                </Tab>
              ))}
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeacherGameView;
