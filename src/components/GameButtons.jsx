import React from 'react';
import { Button } from 'react-bootstrap';

const GameButtons = () => (
  <div className="mb-2">
    <Button block variant="outline-primary">
      <span>Rules</span>
    </Button>
    <Button block variant="outline-primary">
      <span>Drawing Board</span>
    </Button>
  </div>
);

export default GameButtons;
