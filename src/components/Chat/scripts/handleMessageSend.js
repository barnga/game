const handleMessageSend = (socket, values, global = false, roomId = undefined) => {
  if (global) {
    socket.emit('new message global', values.message);
  } else if (roomId) {
    socket.emit('new message room', { message: values.message, roomId });
  } else {
    socket.emit('new message', values.message);
  }
};

export default handleMessageSend;
