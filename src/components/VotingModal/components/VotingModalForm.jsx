import React, { useContext, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import handleSubmitVote from '../scripts/handleSubmitVote';

const VotingModalForm = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const { socket } = useContext(SocketContext) || {};

  useEffect(() => {
    const handleVoteUpdate = (votes) => {
      setGameSettings((settings) => ({
        ...settings,
        hasVoted: votes
          .map((vote) => vote.voterId)
          .filter((id) => id === localStorage.sessionId).length > 0,
      }));
    };

    socket.on('vote update', handleVoteUpdate);

    return () => socket.off('vote update', handleVoteUpdate);
  }, []);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        vote: '',
      }}
      onSubmit={(values, { resetForm }) => {
        if (values.vote.length !== 0) {
          setGameSettings((settings) => ({
            ...settings,
            showVoting: false,
          }));
          handleSubmitVote({ socket, vote: values.vote });
          resetForm();
        }
      }}
    >
      <Form>
        <div className="form-check mb-2">
          {Object.entries(gameSettings?.players).map((player) => {
            const [playerId, playerData] = player;
            return (
              <div key={playerId}>
                <Field name="vote" className="form-check-input" id={playerId} value={playerId} type="radio" />
                <label className="form-check-label" htmlFor={playerId}>{playerData.nickname}</label>
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <Button block variant="primary" type="submit" disabled={gameSettings.hasVoted}>Vote</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default VotingModalForm;
