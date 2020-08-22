const handleJoinGame = ({ values, socket, history }) => new Promise((resolve) => {
  socket.emit('join game', values, (response) => {
    if (response.success) {
      history.push(`/game/${values.gameId}`);
    }
    resolve(response.success);
  });
});

export default handleJoinGame;
