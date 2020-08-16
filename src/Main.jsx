import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './contexts/AppContext';
import injectStylesheet from './helpers/injectStylesheet';

const Main = ({ children }) => {
  const [isStylesheetLoaded, setIsStylesheetLoaded] = useState(false);

  useEffect(() => {
    injectStylesheet(() => setIsStylesheetLoaded(true));
  }, []);

  if (!isStylesheetLoaded) {
    return <></>;
  }

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

Main.propTypes = { children: PropTypes.node };

export default Main;
