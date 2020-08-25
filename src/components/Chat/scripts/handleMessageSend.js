const handleMessageSend = (socket, values) => socket.emit('new message', values.message);

export default handleMessageSend;
