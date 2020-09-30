import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Image, Rect, Text } from 'react-konva';
import generateCardImage from '../../../helpers/generateCardImage';
import { GameContext } from '../../../contexts/Contexts';
import themeColors from '../../../assets/scss/user-variables.scss';

const PlayedCards = ({ isTeacher, canvasDimensions }) => {
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
                x={idx * 50}
                stroke="black"
                key={parsedCardName}
              />
            );
          })}
        </>
      ) : (
        <>
          <Rect
            fill={themeColors['secondary-light']}
            cornerRadius={10}
            height={playAreaDimensions.height}
            width={playAreaDimensions.width}
          />
          <Text
            text="Play area"
            fill={themeColors['primary-1']}
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
