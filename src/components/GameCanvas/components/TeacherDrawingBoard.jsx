import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import PlayerStroke from './PlayerStroke';
import { GameContext } from '../../../contexts/Contexts';

const TeacherDrawingBoard = ({ socket, roomId }) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  const localStrokes = useRef({});
  const [tempStrokes, setTempStrokes] = useState({});

  useEffect(() => {
    localStrokes.current = gameSettings.roomStrokes[roomId] ?? {};
    setTempStrokes(localStrokes.current);
  }, [gameSettings.roomStrokes[roomId]]);

  const handleStrokeUpdate = (data) => {
    if (data.roomId !== roomId) return;
    const { stroke } = data;
    const updateStrokeID = Object.keys(stroke)[0];
    localStrokes.current[updateStrokeID] = stroke[updateStrokeID];

    setGameSettings((settings) => {
      const { roomStrokes } = settings;
      roomStrokes[roomId] = localStrokes.current;

      return ({
        ...settings,
        roomStrokes,
      });
    });
  };

  useEffect(() => {
    let subscribed = true;

    const onStrokeUpdateRoom = (data) => {
      if (subscribed) {
        handleStrokeUpdate(data);
      }
    };

    socket.on('strokes update room', onStrokeUpdateRoom);

    return () => {
      subscribed = false;
      socket.off('strokes update room', onStrokeUpdateRoom);
    };
  }, []);

  if (Object.keys(tempStrokes).length > 0) {
    return (
      <>
        {Object.keys(tempStrokes)
          .map((key) => (
            <PlayerStroke
              points={tempStrokes[key].points}
              color={tempStrokes[key].color}
              key={key}
            />
          ))}
      </>
    );
  }

  return <></>;
};

TeacherDrawingBoard.propTypes = {
  socket: PropTypes.any,
  roomId: PropTypes.string,
};

export default TeacherDrawingBoard;
