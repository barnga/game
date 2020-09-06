import React, { useEffect, useState } from 'react';
import { Image, Layer } from 'react-konva';
import handlePlayCard from '../scripts/handlePlayCard';

const Hand = ({ socket, gameState, canvasDimensions }) => {
  const [gameSettings] = gameState || [];
  const [cardImages, setCardImages] = useState(null);

  useEffect(() => {
    if (gameSettings.hand) {
      const updatedHand = gameSettings.hand.map((card) => {
        const img = document.createElement('img');
        img.src = `http://localhost:7000/public/assets/cards/${card}.svg`;
        return img;
      });
      setCardImages(updatedHand);
    }
  }, [gameState]);

  const cardHeight = canvasDimensions.height / 4;
  const cardWidth = cardHeight / 1.4;

  const offsetX = ((canvasDimensions.width / 2) - (((gameSettings.hand?.length + 1) * 30) / 2));
  const offsetY = (canvasDimensions.height - cardHeight) - 20;

  if (!cardImages) return <></>;

  return (
    <Layer x={offsetX} y={offsetY}>
      {cardImages.map((card, idx) => {
        const [cardName] = card.src.split('/').slice(-1);
        const parsedCardName = cardName.split('.svg')[0];

        return (
          <Image
            image={card}
            height={cardHeight}
            width={cardWidth}
            x={idx * 30}
            stroke="black"
            key={parsedCardName}
            onClick={() => handlePlayCard(socket, parsedCardName)}
          />
        );
      })}
    </Layer>
  );
};

export default Hand;
