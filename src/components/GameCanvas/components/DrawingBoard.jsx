import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import PlayerStroke from './PlayerStroke';

const DrawingBoard = ({
  containerRef, stageRef, socket, gameState, colorRef,
}) => {
  const [gameSettings, setGameSettings] = gameState || [];
  const isDrawing = useRef(false);
  const strokeID = useRef(0);

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
    if (gameSettings.strokes[strokeID.current] == null) return;

    // Define stroke
    const stroke = {
      color: colorRef.current,
      points: gameSettings.strokes[strokeID.current].points.concat(
        [stageRef.current.getStage().getPointerPosition()],
      ),
    };

    emitStrokeUpdate(strokeID.current, stroke);
  };

  const handleStrokeEnd = () => {
    isDrawing.current = false;
  };

  useEffect(() => {
    let subscribed = true;

    const handleStrokeUpdate = (stroke) => {
      if (subscribed) {
        setGameSettings((settings) => {
          const { strokes } = settings;
          const updateStrokeID = Object.keys(stroke)[0];
          strokes[updateStrokeID] = stroke[updateStrokeID];
          console.log(`Update with stroke: ${updateStrokeID}`);

          return {
            ...settings,
            strokes,
          };
        });
      }
    };

    console.log(`Socket: ${socket.id}`);
    socket.on('strokes update', handleStrokeUpdate);

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
    };
  }, []);

  if (gameSettings) {
    return (
      <>
        {Object.keys(gameSettings.strokes ?? {})
          .map((key) => (
            <PlayerStroke
              points={gameSettings.strokes[key].points}
              color={gameSettings.strokes[key].color}
              key={key}
            />
          ))}
      </>
    );
  }

  return (<></>);
};

DrawingBoard.propTypes = {
  stageRef: PropTypes.any,
  containerRef: PropTypes.any,
  socket: PropTypes.any,
  gameState: PropTypes.any,
  colorRef: PropTypes.any,
};

export default DrawingBoard;
