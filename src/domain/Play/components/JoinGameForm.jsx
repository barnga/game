import React, { useContext, useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Alert, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import withSocket from '../../../hocs/withSocket';
import { SocketContext } from '../../../contexts/Contexts';
import useNamespace from '../../../hooks/useNamespace';
import handleJoinGame from '../scripts/handleJoinGame';

const JoinGameForm = ({ history }) => {
  const { socket } = useContext(SocketContext) || {};
  const [showError, setShowError] = useState(false);
  useNamespace('http://localhost:3000');

  useEffect(() => {
    localStorage.setItem('role', 'player');
  }, []);

  if (!socket) return <></>;

  return (
    <Formik
      initialValues={{
        gameId: '',
        nickname: '',
      }}
      onSubmit={(values) => {
        handleJoinGame({ values, socket, history })
          .then((success) => setShowError(!success));
      }}
    >
      <Form>
        {showError && (
          <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
            We could not find a game with that code.
          </Alert>
        )}
        <div className="form-group">
          <label className="form-control-label">Game code</label>
          <Field name="gameId" className="form-control" placeholder="Game code" autoComplete="off" />
        </div>
        <div className="form-group">
          <label className="form-control-label">Name</label>
          <Field name="nickname" className="form-control" placeholder="John Doe" autoComplete="off" />
        </div>
        <div className="form-group">
          <Button block variant="primary" type="submit">Play</Button>
        </div>
      </Form>
    </Formik>
  );
};

JoinGameForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(JoinGameForm));
