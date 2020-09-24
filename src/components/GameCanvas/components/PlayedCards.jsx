import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Rect, Text } from 'react-konva';
import generateCardImage from '../../../helpers/generateCardImage';
import { GameContext } from '../../../contexts/Contexts';

const PlayedCards = ({ canvasDimensions }) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const [playedCards, setPlayedCards] = useState(null);

  useEffect(() => {
    (async () => {
      if (gameSettings.playedCards) {
        const updatedPlayedCards = await Promise.all(gameSettings.playedCards
          .map((cardData) => generateCardImage(cardData.playedCard)));
        setPlayedCards(updatedPlayedCards);
      }
    })();
  }, [gameState]);

  const cardHeight = canvasDimensions.height / 4;
  const cardWidth = cardHeight / 1.4;

  const playAreaDimensions = {
    width: canvasDimensions.width * 0.5,
    height: canvasDimensions.height * 0.3,
  };

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
            height={playAreaDimensions.height}
            width={playAreaDimensions.width}
          />
          <Text
            text="Play area"
            verticalAlign="middle"
            align="center"
            height={playAreaDimensions.height}
            width={playAreaDimensions.width}
          />
        </>
      )}
    </>
  );
};

PlayedCards.propTypes = {
  socket: PropTypes.any,
  canvasDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default PlayedCards;
