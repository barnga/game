import React from 'react';
import {
  Image, Layer, Rect, Stage,
} from 'react-konva';
import useImage from 'use-image';

const GameCanvas = () => {
  // <canvas className="h-100 w-100 mt-2 mt-lg-0 />

  const cards = ['CLUB-1', 'CLUB-2', 'CLUB-3', 'ClUB-5'];
  const cardImages = cards.map((card) => {
    const [image] = useImage(`http://localhost:7000/public/assets/cards/${card}.svg`);
    return image;
  });
  const canvasHeight = 500;
  const canvasWidth = 700;
  const cardHeight = 150;
  const cardWidth = cardHeight / 1.4;
  const offsetX = ((canvasWidth / 2) - ((cardImages.length * cardWidth) / 2));
  const offsetY = (canvasHeight - cardHeight) - 20;

  return (
    <Stage width={canvasWidth} height={canvasHeight}>
      <Layer>
        <Rect fill="black" top={0} left={0} height={900} width={900} />
      </Layer>
      <Layer x={offsetX} y={offsetY}>
        {cardImages.map((card, idx) => (
          <Image
            draggable
            image={card}
            height={cardHeight}
            width={cardWidth}
            x={idx * cardWidth}
            shadowColor="blue"
            shadowEnabled
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default GameCanvas;
