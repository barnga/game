import React, { useEffect, useState } from 'react';
import {
  Image, Layer, Rect, Stage, Text,
} from 'react-konva';
import useImage from 'use-image';
import PropTypes from 'prop-types';

const GameCanvas = ({ containerRef }) => {
  const [canvasDimensions, setCanvasDimensions] = useState({ height: 0, width: 0 });
  const cards = ['CLUB-1', 'CLUB-2', 'CLUB-3', 'CLUB-2'];
  const cardImages = cards.map((card) => {
    // TODO: Get base url from .env
    const [image] = useImage(`http://localhost:7000/public/assets/cards/${card}.svg`);
    return image;
  });
  const cardHeight = canvasDimensions.height / 4;
  const cardWidth = cardHeight / 1.4;

  const offsetX = ((canvasDimensions.width / 2) - (((cardImages.length + 1) * 30) / 2));
  const offsetY = (canvasDimensions.height - cardHeight) - 20;

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
    <Stage width={canvasDimensions.width} height={canvasDimensions.height}>
      <Layer>
        <Rect fill="#f3f3f3" top={0} left={0} height={canvasDimensions.height} width={canvasDimensions.width} />
      </Layer>
      <Layer
        x={(canvasDimensions.width / 2) - (300 / 2)}
        y={(canvasDimensions.height / 2) - (100 / 2)}
      >
        <Rect
          fill="#dddddd"
          draggable
          height={100}
          width={300}
        />
        <Text text="Play area" verticalAlign="middle" align="center" height={100} width={300} />
      </Layer>
      <Layer x={offsetX} y={offsetY}>
        {cardImages.map((card, idx) => (
          <Image
            draggable
            image={card}
            height={cardHeight}
            width={cardWidth}
            x={idx * 30}
            stroke="black"
          />
        ))}
      </Layer>
    </Stage>
  );
};

GameCanvas.propTypes = {
  containerRef: PropTypes.any,
};

export default GameCanvas;
