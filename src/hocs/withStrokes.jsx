import React, { useState } from 'react';
import { StrokesContext } from '../contexts/Contexts';

const withStrokes = (WrappedComponent) => {
  const WithStrokes = (props) => {
    const strokesState = useState({
      strokes: {},
      roomStrokes: {},
    });

    return (
      <StrokesContext.Provider value={{ strokesState }}>
        <WrappedComponent {...props} />
      </StrokesContext.Provider>
    );
  };

  return WithStrokes;
};

export default withStrokes;
