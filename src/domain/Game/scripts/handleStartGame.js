const handleStartGame = (socket) => new Promise((resolve) => {
  socket.emit('start game', (response) => {
    resolve(response.hasMinimumPlayers);
  });
});

export default handleStartGame;
