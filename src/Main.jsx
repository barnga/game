import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './contexts/Contexts';
import injectStylesheet from './helpers/injectStylesheet';

import themeColors from './assets/scss/user-variables.scss';

const Main = ({ children }) => {
  const [isStylesheetLoaded, setIsStylesheetLoaded] = useState(false);
  console.log(themeColors);

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
