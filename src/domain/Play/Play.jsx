import React from 'react';
import GameCodeForm from './components/JoinGameForm';
import SimpleForm from '../../components/SimpleForm';

const Play = () => (
  <SimpleForm>
    <div className="text-center mb-4">
      <h1 className="mb-1">Enter game code</h1>
    </div>
    <GameCodeForm />
  </SimpleForm>
);

export default Play;
