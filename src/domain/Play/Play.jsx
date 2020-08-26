import React from 'react';
import JoinGameForm from './components/JoinGameForm';
import SimpleForm from '../../components/SimpleForm';

const Play = () => (
  <SimpleForm>
    <div className="text-center mb-4">
      <h1 className="mb-1">Join game</h1>
    </div>
    <JoinGameForm />
  </SimpleForm>
);

export default Play;
