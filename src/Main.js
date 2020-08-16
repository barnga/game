import React, { useEffect, useState } from 'react';
import AppContext from '../src/contexts/AppContext';
import injectStylesheet from "./helpers/injectStylesheet";

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

export default Main;