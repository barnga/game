const handlePlayCard = (socket, cardName) => socket.emit('play card', cardName);

export default handlePlayCard;
