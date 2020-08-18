import React from 'react';
import SimpleForm from '../../components/SimpleForm';
import CreateGameForm from './components/CreateGameForm';

const Create = () => (
  <SimpleForm>
    <div className="text-center mb-4">
      <h1 className="mb-1">Create game</h1>
    </div>
    <CreateGameForm />
  </SimpleForm>
);

export default Create;
