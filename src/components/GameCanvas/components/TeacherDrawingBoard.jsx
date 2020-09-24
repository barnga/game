import React, {
  useContext, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import PlayerStroke from './PlayerStroke';
import { StrokesContext } from '../../../contexts/Contexts';

const TeacherDrawingBoard = ({ socket, roomId, canvasDimensions }) => {
  const { strokesState } = useContext(StrokesContext) || {};
  const [strokesSettings, setStrokesSettings] = strokesState || [];
  const strokes = strokesSettings.roomStrokes[roomId] ?? {};

  const handleStrokeUpdate = useCallback((data) => {
    if (data.roomId !== roomId) return;
    const { stroke } = data;
    const updateStrokeID = Object.keys(stroke)[0];
    const newStrokes = strokes ?? {};
    newStrokes[updateStrokeID] = stroke[updateStrokeID];

    setStrokesSettings((settings) => {
      const { roomStrokes } = settings;
      roomStrokes[roomId] = newStrokes;

      return ({
        ...settings,
        roomStrokes,
      });
    });
  }, [strokesSettings]);

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
  }, [handleStrokeUpdate]);

  if (Object.keys(strokes ?? {}).length > 0) {
    return (
      <>
        {Object.keys(strokes ?? {})
          .map((key) => (
            <PlayerStroke
              points={strokes[key].points}
              color={strokes[key].color}
              canvasDimensions={canvasDimensions}
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
  canvasDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default TeacherDrawingBoard;
