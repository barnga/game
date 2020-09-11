import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import PlayerStroke from './PlayerStroke';
import { GameContext } from '../../../contexts/Contexts';

const DrawingBoard = ({
  containerRef, stageRef, socket, colorRef,
}) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];

  const localStrokes = useRef({});
  const [tempStrokes, setTempStrokes] = useState({});
  const isDrawing = useRef(false);
  const strokeID = useRef(0);

  useEffect(() => {
    localStrokes.current = gameSettings.strokes;
    if (gameSettings.strokes === {}) {
      setTempStrokes({});
    } else {
      setTempStrokes(localStrokes.current);
    }
  }, [gameSettings.strokes]);

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
      points: [stageRef.current.getStage().getPointerPosition()],
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
        [stageRef.current.getStage().getPointerPosition()],
      ),
    };

    emitStrokeUpdate(strokeID.current, stroke);
  };

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

    socket.on('strokes update', (stroke) => {
      if (subscribed) {
        handleStrokeUpdate(stroke);
      }
    });

    if (containerRef.current) {
      // Set drawing handlers
      containerRef.current.addEventListener('mousedown', handleStrokeStart, false);
      containerRef.current.addEventListener('mouseup', handleStrokeEnd, false);
      containerRef.current.addEventListener('mousemove', throttle(handleStrokeDraw, 7.5), false);

      // Touch support for mobile devices
      containerRef.current.addEventListener('touchstart', handleStrokeStart, false);
      containerRef.current.addEventListener('touchend', handleStrokeEnd, false);
      containerRef.current.addEventListener('touchmove', throttle(handleStrokeDraw, 7.5), false);
    }

    return () => {
      subscribed = false;
      socket.off('strokes update', handleStrokeUpdate);

      if (containerRef.current) {
        // Set drawing handlers
        containerRef.current.removeEventListener('mousedown', handleStrokeStart, false);
        containerRef.current.removeEventListener('mouseup', handleStrokeEnd, false);
        containerRef.current.removeEventListener('mousemove', throttle(handleStrokeDraw, 7.5), false);

        // Touch support for mobile devices
        containerRef.current.removeEventListener('touchstart', handleStrokeStart, false);
        containerRef.current.removeEventListener('touchend', handleStrokeEnd, false);
        containerRef.current.removeEventListener('touchmove', throttle(handleStrokeDraw, 7.5), false);
      }
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

DrawingBoard.propTypes = {
  stageRef: PropTypes.any,
  containerRef: PropTypes.any,
  socket: PropTypes.any,
  gameState: PropTypes.any,
  colorRef: PropTypes.any,
};

export default DrawingBoard;
