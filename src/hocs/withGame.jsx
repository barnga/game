import React, { useState } from 'react';
import { GameContext } from '../contexts/Contexts';

const withGame = (WrappedComponent) => {
  const WithGame = (props) => {
    const gameState = useState(null);

    return (
      <GameContext.Provider value={{ gameState }}>
        <WrappedComponent {...props} />
      </GameContext.Provider>
    );
  };

  return WithGame;
};

export default withGame;
