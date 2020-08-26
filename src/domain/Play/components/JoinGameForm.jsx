import React, { useContext, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Alert, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import withSocket from '../../../hocs/withSocket';
import { SocketContext } from '../../../contexts/Contexts';
import useNamespace from '../../../hooks/useNamespace';
import handleJoinGame from '../scripts/handleJoinGame';
import JoinGameSchema from '../../../schemas/JoinGameSchema';
import setFieldError from '../../../helpers/setFieldError';

const JoinGameForm = ({ history }) => {
  const { socket } = useContext(SocketContext) || {};
  const [showError, setShowError] = useState(false);
  useNamespace('http://localhost:3000');

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
      validationSchema={JoinGameSchema}
    >
      {(props) => (
        <Form>
          {showError && (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              We could not find a game with that code.
            </Alert>
          )}
          <div className="form-group">
            <label className="form-control-label">Game code</label>
            <Field
              name="gameId"
              placeholder="mjckdl"
              autoComplete="off"
              className={setFieldError({ props, fieldName: 'gameId' })}
            />
          </div>
          <div className="form-group">
            <label className="form-control-label">Name</label>
            <Field
              name="nickname"
              placeholder="Peter Redstone"
              autoComplete="off"
              className={setFieldError({ props, fieldName: 'nickname' })}
            />
          </div>
          <div className="form-group">
            <Button block variant="primary" type="submit">Play</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

JoinGameForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(JoinGameForm));
