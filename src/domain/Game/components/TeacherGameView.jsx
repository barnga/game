import React, { useContext } from 'react';
import { SocketContext } from '../../../contexts/Contexts';

const TeacherGameView = () => {
  const { socket } = useContext(SocketContext);

  return (
    <div>Teacher view</div>
  );
};

export default TeacherGameView;
