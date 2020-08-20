import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './domain/Landing/Landing';
import Play from './domain/Play/Play';
import Create from './domain/Create/Create';
import About from './domain/About/About';
import NotFound from './domain/NotFound/NotFound';
import Game from './domain/Game/Game';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/play" exact component={Play} />
      <Route path="/create" exact component={Create} />
      <Route path="/about" exact component={About} />
      <Route path="/game/:gameId" exact component={Game} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
