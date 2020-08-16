import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './domain/Landing/Landing';
import Navbar from './components/Navbar';
import Play from './domain/Play/Play';
import Create from './domain/Create/Create';
import About from './domain/About/About';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/play" exact component={Play} />
      <Route path="/create" exact component={Create} />
      <Route path="/about" exact component={About} />
    </Switch>
  </BrowserRouter>
);

export default App;
