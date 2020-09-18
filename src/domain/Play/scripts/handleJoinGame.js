const handleJoinGame = (
  { values, socket, history },
  adminToken = undefined,
) => new Promise((resolve) => {
  const completion = (response) => {
    if (response.success) {
      history.push({
        pathname: `/game/${values.gameId}`,
        // eslint-disable-next-line eqeqeq
        state: (adminToken != undefined)
          ? { isTeacher: true, adminToken: response.adminToken }
          : undefined,
      });
    }
    resolve(response.success);
  };

  // eslint-disable-next-line eqeqeq
  if (adminToken == undefined) {
    socket.emit('join game', values, completion);
  } else {
    socket.emit('join admin', { ...values, adminToken }, completion);
  }
});

export default handleJoinGame;
