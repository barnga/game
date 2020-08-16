import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './Test';
import Landing from './domain/Landing/Landing';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
