const handleSubmitVote = ({ socket, vote }) => socket.emit('vote', vote);

export default handleSubmitVote;
