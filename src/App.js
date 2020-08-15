import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './components/Test';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Test} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
