const handleStartGame = (socket) => new Promise((resolve) => {
  console.log('started game');
  socket.emit('start game', (response) => {
    resolve(response.hasMinimumPlayers);
  });
});

export default handleStartGame;
