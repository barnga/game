const handleStartNewRound = (socket, roomId) => socket.emit('redeal cards', roomId);

export default handleStartNewRound;
