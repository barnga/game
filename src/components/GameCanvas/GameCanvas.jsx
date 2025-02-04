import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import PropTypes from 'prop-types';
import { GameContext, SocketContext, StrokesContext } from '../../contexts/Contexts';
import DrawingBoard from './components/DrawingBoard';
import PlayedCards from './components/PlayedCards';
import Hand from './components/Hand';
import TeacherDrawingBoard from './components/TeacherDrawingBoard';
import Winner from './components/Winner';
import themeColors from '../../assets/scss/user-variables.scss';

const GameCanvas = ({
  brushColorRef, teacherView, roomId, aspectRatio = 1.618, selectedTab,
}) => {
  const { socket } = useContext(SocketContext) || {};
  const [canvasDimensions, setCanvasDimensions] = useState({ height: 0, width: 0 });
  const containerRef = useRef(null);
  const stageRef = useRef();

  useEffect(() => {
    const setDimensions = () => {
      const dimensions = {
        height: containerRef?.current?.offsetHeight,
        width: containerRef?.current?.offsetWidth,
      };

      if (dimensions.height * aspectRatio > dimensions.width) {
        setCanvasDimensions({
          height: dimensions.width / aspectRatio,
          width: dimensions.width,
        });
      } else {
        setCanvasDimensions({
          height: dimensions.height,
          width: dimensions.height * aspectRatio,
        });
      }
    };

    setDimensions();
    window.addEventListener('resize', setDimensions);

    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, [selectedTab]);

  return (
    <div className="h-100 w-100 justify-content-center align-content-center" ref={containerRef}>
      <GameContext.Consumer>
        {(gameContextValue) => (
          <StrokesContext.Consumer>
            {(strokesContextValue) => (
              <Stage
                width={canvasDimensions.width}
                height={canvasDimensions.height}
                ref={stageRef}
              >
                <GameContext.Provider value={gameContextValue}>
                  <Layer>
                    <Rect
                      fill={themeColors.light}
                      cornerRadius={10}
                      top={0}
                      left={0}
                      height={canvasDimensions.height}
                      width={canvasDimensions.width}
                      strokeWidth={gameContextValue.gameState[0]?.turn === localStorage.sessionId
                        ? 5 : 2}
                      stroke={gameContextValue.gameState[0]?.turn === localStorage.sessionId
                        ? themeColors.success : themeColors.primary}
                      style={{ border: '2px solid red' }}
                    />
                  </Layer>
                  <Layer
                    x={(canvasDimensions.width / 2) - (300 / 2)}
                    y={(canvasDimensions.height / 2) - (100 / 2)}
                  >
                    <PlayedCards
                      isTeacher={teacherView}
                      roomId={roomId}
                      canvasDimensions={canvasDimensions}
                    />
                  </Layer>
                  <Layer>
                    <StrokesContext.Provider value={strokesContextValue}>
                      {teacherView
                        ? (
                          <TeacherDrawingBoard
                            socket={socket}
                            roomId={roomId}
                            canvasDimensions={canvasDimensions}
                          />
                        )
                        : (
                          <DrawingBoard
                            containerRef={containerRef}
                            stageRef={stageRef}
                            socket={socket}
                            colorRef={brushColorRef}
                            canvasDimensions={canvasDimensions}
                          />
                        )}
                    </StrokesContext.Provider>
                  </Layer>
                  <Winner canvasDimensions={canvasDimensions} />
                  <Hand
                    socket={socket}
                    canvasDimensions={canvasDimensions}
                  />
                </GameContext.Provider>
              </Stage>
            )}
          </StrokesContext.Consumer>
        )}
      </GameContext.Consumer>
    </div>
  );
};

GameCanvas.propTypes = {
  brushColorRef: PropTypes.any,
  teacherView: PropTypes.bool,
  roomId: PropTypes.string,
  aspectRatio: PropTypes.number,
  selectedTab: PropTypes.any,
};

export default GameCanvas;
