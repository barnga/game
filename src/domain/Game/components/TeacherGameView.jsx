import React, { useContext, useState } from 'react';
import { SocketContext } from '../../../contexts/Contexts';

const TeacherGameView = () => {
  const { socket } = useContext(SocketContext);
  const [rooms, setRooms] = useState([]);

  socket.on('rooms update', (data) => {
    setRooms(data);
  });

  return (
    <div>Teacher view</div>
  );
};

export default TeacherGameView;
