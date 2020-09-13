import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { GameContext, SocketContext } from '../../../contexts/Contexts';
import handleSubmitVote from '../scripts/handleSubmitVote';

const VotingModalForm = () => {
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings, setGameSettings] = gameState || [];
  const { socket } = useContext(SocketContext) || {};

  return (
    <Formik
      initialValues={{
        vote: '',
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmitVote({ socket, vote: values.vote });
        setGameSettings((settings) => ({
          ...settings,
          showVoting: false,
        }));
        resetForm();
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
          <Button block variant="primary" type="submit">Vote</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default VotingModalForm;
