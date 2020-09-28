import React, { useContext, useEffect, useState } from 'react';
import { Image, Layer } from 'react-konva';
import handlePlayCard from '../scripts/handlePlayCard';
import generateCardImage from '../../../helpers/generateCardImage';
import { GameContext } from '../../../contexts/Contexts';

const Hand = ({ socket, canvasDimensions }) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const [cardImages, setCardImages] = useState(null);

  const cardHeight = canvasDimensions.height / 4;
  const cardWidth = cardHeight / 1.4;

  const offsetX = ((canvasDimensions.width / 2) - (((gameSettings.hand?.length + 1) * 30) / 2));
  const offsetY = (canvasDimensions.height - cardHeight) - 20;

  useEffect(() => {
    (async () => {
      if (gameSettings.hand) {
        const updatedHand = await Promise.all(gameSettings.hand.map(async (card) => ({
          img: await generateCardImage(card),
          style: {
            stroke: 'black',
          },
        })));
        setCardImages(updatedHand);
      }
    })();
  }, [gameState]);

  if (!cardImages) return <></>;

  return (
    <Layer x={offsetX} y={offsetY}>
      {cardImages.map((card, idx) => {
        const [cardName] = card.img.src.split('/').slice(-1);
        const parsedCardName = cardName.split('.svg')[0];

        return (
          <Image
            image={card.img}
            height={cardHeight}
            width={cardWidth}
            x={idx * 30}
            stroke={card.style.stroke}
            key={parsedCardName}
            onClick={() => {
              if (gameSettings.turn === localStorage.sessionId) {
                handlePlayCard(socket, parsedCardName);
              } else {
                console.log('It is not your turn!');
              }
            }}
            // onMouseEnter={(event) => setCardImages((cards) => {
            //   const updatedCards = cards;
            //   updatedCards[event.target.index].style.stroke = 'red';
            //   return updatedCards;
            // })}
            // onMouseLeave={(event) => setCardImages((cards) => {
            //   const updatedCards = cards;
            //   updatedCards[event.target.index].style.stroke = 'black';
            //   return updatedCards;
            // })}
          />
        );
      })}
    </Layer>
  );
};

export default Hand;
