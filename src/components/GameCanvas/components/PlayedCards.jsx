import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image, Rect, Text, Layer,
} from 'react-konva';
import generateCardImage from '../../../helpers/generateCardImage';
import { GameContext } from '../../../contexts/Contexts';
import themeColors from '../../../assets/scss/user-variables.scss';

const PlayedCards = ({ isTeacher, roomId, canvasDimensions }) => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];
  const [playedCards, setPlayedCards] = useState(null);

  useEffect(() => {
    (async () => {
      const roomCards = isTeacher
        ? gameSettings.rooms.filter((room) => room.roomId === roomId)[0].playedCards
        : gameSettings.playedCards;

      if (roomCards) {
        console.log(roomCards);
        const updatedPlayedCards = await Promise.all(roomCards
          .map(async (cardData) => ({
            name: cardData.nickname,
            image: await generateCardImage(cardData.playedCard),
          })));
        setPlayedCards(updatedPlayedCards);
      }
    })();
  }, [gameSettings]);

  const cardHeight = canvasDimensions.height / 4;
  const cardWidth = cardHeight / 1.4;

  const playAreaDimensions = {
    width: canvasDimensions.width * 0.5,
    height: canvasDimensions.height * 0.3,
  };

  const playAreaCoordinates = {
    x: (canvasDimensions.width - playAreaDimensions.width) / 2,
    y: (canvasDimensions.height - playAreaDimensions.height) / 2,
  };

  return (
    <Layer x={playAreaCoordinates.x} y={playAreaCoordinates.y}>
      {playedCards ? (
        <>
          {playedCards.map((card, idx) => {
            const [cardName] = card.image.src.split('/').slice(-1);
            const parsedCardName = cardName.split('.svg')[0];

            return (
              <>
                <Image
                  image={card.image}
                  height={cardHeight}
                  width={cardWidth}
                  x={idx * 50}
                  stroke="black"
                  key={parsedCardName}
                />
                <Text
                  text={card.name}
                  width={cardWidth}
                  fontSize={16}
                  fontStyle="bold"
                  x={idx * 50}
                  y={-40 + -20 * (idx % 2)}
                  fill={themeColors[idx % 2 ? 'primary-1' : 'secondary']}
                  align="center"
                  verticalAlign="bottom"
                />
              </>
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
    </Layer>
  );
};

PlayedCards.propTypes = {
  isTeacher: PropTypes.bool,
  roomId: PropTypes.string,
  canvasDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default PlayedCards;
