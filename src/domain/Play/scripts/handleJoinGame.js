const handleJoinGame = ({ values, socket, history }) => {
  localStorage.setItem('role', 'player');

  if (socket) {
    socket.emit('join game', values, (response) => {
      if (response.success) {
        history.push(`/game/${values.gameId}`);
      } else {
        console.log('That game does not exist!');
      }
    });
  }
};

export default handleJoinGame;
