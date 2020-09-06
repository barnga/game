import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Rect, Text } from 'react-konva';
import generateCardImage from '../../../helpers/generateCardImage';

const PlayedCards = ({ gameState, canvasDimensions }) => {
  const [gameSettings] = gameState || [];
  const [playedCards, setPlayedCards] = useState(null);

  useEffect(() => {
    if (gameSettings.playedCards) {
      const updatedPlayedCards = gameSettings.playedCards
        .map((cardData) => generateCardImage(cardData.playedCard));
      setPlayedCards(updatedPlayedCards);
    }
  }, [gameState]);

  const cardHeight = canvasDimensions.height / 4;
  const cardWidth = cardHeight / 1.4;

  return (
    <>
      {playedCards ? (
        <>
          {playedCards.map((card, idx) => {
            const [cardName] = card.src.split('/').slice(-1);
            const parsedCardName = cardName.split('.svg')[0];

            return (
              <Image
                image={card}
                height={cardHeight}
                width={cardWidth}
                x={idx * cardWidth}
                stroke="black"
                key={parsedCardName}
              />
            );
          })}
        </>
      ) : (
        <>
          <Rect
            fill="#dddddd"
            draggable
            height={100}
            width={300}
          />
          <Text text="Play area" verticalAlign="middle" align="center" height={100} width={300} />
        </>
      )}
    </>
  );
};

PlayedCards.propTypes = {
  socket: PropTypes.any,
  gameState: PropTypes.any,
  canvasDimensions: PropTypes.any,
};

export default PlayedCards;
