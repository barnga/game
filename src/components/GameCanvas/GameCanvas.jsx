import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import PropTypes from 'prop-types';
import { GameContext, SocketContext } from '../../contexts/Contexts';
import DrawingBoard from './components/DrawingBoard';
import PlayedCards from './components/PlayedCards';
import Hand from './components/Hand';
import TeacherDrawingBoard from './components/TeacherDrawingBoard';

const GameCanvas = ({
  containerRef, brushColorRef, teacherView, roomId,
}) => {
  const { gameState } = useContext(GameContext) || {};
  const { socket } = useContext(SocketContext) || {};
  const [canvasDimensions, setCanvasDimensions] = useState({ height: 0, width: 0 });
  const stageRef = useRef();

  useEffect(() => {
    const setDimensions = () => {
      setCanvasDimensions({
        height: containerRef?.current?.offsetHeight,
        width: containerRef?.current?.offsetWidth,
      });
    };

    setDimensions();
    window.addEventListener('resize', setDimensions);

    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);

  return (
    <GameContext.Consumer>
      {(value) => (
        <Stage width={canvasDimensions.width} height={canvasDimensions.height} ref={stageRef}>
          <GameContext.Provider value={value}>
            <Layer>
              <Rect fill="#f3f3f3" top={0} left={0} height={canvasDimensions.height} width={canvasDimensions.width} />
            </Layer>
            <Layer
              x={(canvasDimensions.width / 2) - (300 / 2)}
              y={(canvasDimensions.height / 2) - (100 / 2)}
            >
              <PlayedCards canvasDimensions={canvasDimensions} />
            </Layer>
            <Layer>
              {teacherView
                ? (
                  <TeacherDrawingBoard
                    socket={socket}
                    roomId={roomId}
                  />
                )
                : (
                  <DrawingBoard
                    containerRef={containerRef}
                    stageRef={stageRef}
                    socket={socket}
                    colorRef={brushColorRef}
                  />
                )}
            </Layer>
            <Hand
              socket={socket}
              canvasDimensions={canvasDimensions}
            />
          </GameContext.Provider>
        </Stage>
      )}
    </GameContext.Consumer>
  );
};

GameCanvas.propTypes = {
  containerRef: PropTypes.any,
  brushColorRef: PropTypes.any,
  teacherView: PropTypes.bool,
  roomId: PropTypes.string,
};

export default GameCanvas;
