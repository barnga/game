import React, { useContext } from 'react';
import { SocketContext } from '../../../contexts/Contexts';

const TeacherGameView = () => {
  const { socket } = useContext(SocketContext);

  // TODO: Set GameContext
  // socket.on('rooms update', (data) => {
  //   setRooms(data);
  // });

  return (
    <div>Teacher view</div>
  );
};

export default TeacherGameView;
