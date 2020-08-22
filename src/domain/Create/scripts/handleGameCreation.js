const handleGameCreation = ({ values, socket, history }) => {
  socket.emit('create game', values, (response) => {
    if (response.success) {
      history.push(`/game/${response.gameId}`);
    } else {
      console.log('An error occurred while creating the game');
    }
  });
};

export default handleGameCreation;
