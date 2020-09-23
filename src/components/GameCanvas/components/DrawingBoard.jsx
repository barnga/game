import React, {
  useContext, useEffect, useRef, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import PlayerStroke from './PlayerStroke';
import { GameContext } from '../../../contexts/Contexts';

const DrawingBoard = ({
  containerRef, stageRef, socket, colorRef, canvasDimensions,
}) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  const localStrokes = useRef({});
  const [updates, updater] = useState(0);
  const isDrawing = useRef(false);
  const strokeID = useRef(0);

  useEffect(() => {
    localStrokes.current = gameSettings.strokes;
    updater((v) => v + 1);
  }, [gameSettings.strokes]);

  const getRelativePoint = useCallback((point) => ({
    x: point.x / canvasDimensions.width,
    y: point.y / canvasDimensions.height,
  }), [canvasDimensions]);

  // limit the number of events per second
  const throttle = (callback, delay) => {
    let previousCall = new Date().getTime();
    return (...args) => {
      const time = new Date().getTime();

      if ((time - previousCall) >= delay) {
        previousCall = time;
        callback(...args);
      }
    };
  };

  // Drawing
  const emitStrokeUpdate = (id, stroke) => {
    // Construct value to emit
    const emitValue = {};
    emitValue[id] = stroke;

    socket.emit('strokes update', emitValue);
  };

  const handleStrokeStart = () => {
    // Define stroke & generate random stroke ID
    isDrawing.current = true;
    const newID = Math.floor(Math.random() * 10000);
    strokeID.current = newID;
    const stroke = {
      color: colorRef.current,
      points: [getRelativePoint(stageRef.current.getStage().getPointerPosition())],
    };

    emitStrokeUpdate(newID, stroke);
  };

  const handleStrokeDraw = () => {
    if (!isDrawing.current) return;
    if (!localStrokes.current[strokeID.current]) return;

    // Define stroke
    const stroke = {
      color: colorRef.current,
      points: localStrokes.current[strokeID.current].points.concat(
        [getRelativePoint(stageRef.current.getStage().getPointerPosition())],
      ),
    };

    emitStrokeUpdate(strokeID.current, stroke);
  };

  const throttledHandleStrokeDraw = throttle(handleStrokeDraw, 10);

  const handleStrokeEnd = () => {
    isDrawing.current = false;
  };

  const handleStrokeUpdate = (stroke) => {
    const updateStrokeID = Object.keys(stroke)[0];
    localStrokes.current[updateStrokeID] = stroke[updateStrokeID];

    setGameSettings((settings) => ({
      ...settings,
      strokes: localStrokes.current,
    }));
  };

  useEffect(() => {
    let subscribed = true;

    const onStrokeUpdate = (stroke) => {
      if (subscribed) {
        handleStrokeUpdate(stroke);
      }
    };

    socket.on('strokes update', onStrokeUpdate);

    if (containerRef.current) {
      // Set drawing handlers
      containerRef.current.addEventListener('mousedown', handleStrokeStart, false);
      containerRef.current.addEventListener('mouseup', handleStrokeEnd, false);
      containerRef.current.addEventListener('mouseout', handleStrokeEnd, false);
      containerRef.current.addEventListener('mousemove', throttledHandleStrokeDraw, false);

      // Touch support for mobile devices
      containerRef.current.addEventListener('touchstart', handleStrokeStart, false);
      containerRef.current.addEventListener('touchend', handleStrokeEnd, false);
      containerRef.current.addEventListener('touchcancel', handleStrokeEnd, false);
      containerRef.current.addEventListener('touchmove', throttledHandleStrokeDraw, false);
    }

    return () => {
      subscribed = false;
      socket.off('strokes update', onStrokeUpdate);

      if (containerRef.current) {
        // Set drawing handlers
        containerRef.current.removeEventListener('mousedown', handleStrokeStart, false);
        containerRef.current.removeEventListener('mouseup', handleStrokeEnd, false);
        containerRef.current.removeEventListener('mouseout', handleStrokeEnd, false);
        containerRef.current.removeEventListener('mousemove', throttledHandleStrokeDraw, false);

        // Touch support for mobile devices
        containerRef.current.removeEventListener('touchstart', handleStrokeStart, false);
        containerRef.current.removeEventListener('touchend', handleStrokeEnd, false);
        containerRef.current.removeEventListener('touchcancel', handleStrokeEnd, false);
        containerRef.current.removeEventListener('touchmove', throttledHandleStrokeDraw, false);
      }
    };
  }, [canvasDimensions, getRelativePoint]);

  if (Object.keys(localStrokes.current).length > 0) {
    return (
      <>
        {Object.keys(localStrokes.current)
          .map((key) => (
            <PlayerStroke
              points={localStrokes.current[key].points}
              color={localStrokes.current[key].color}
              canvasDimensions={canvasDimensions}
              key={key}
            />
          ))}
      </>
    );
  }

  return <></>;
};

DrawingBoard.propTypes = {
  stageRef: PropTypes.any,
  containerRef: PropTypes.any,
  socket: PropTypes.any,
  gameState: PropTypes.any,
  colorRef: PropTypes.any,
  canvasDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default DrawingBoard;
