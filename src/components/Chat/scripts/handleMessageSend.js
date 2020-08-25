const handleMessageSend = (socket, values) => {
  console.log(values);
  socket.emit('new message', values.message);
};

export default handleMessageSend;
