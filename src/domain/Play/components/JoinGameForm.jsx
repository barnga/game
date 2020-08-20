import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import withSocket from '../../../hocs/withSocket';
import { SocketContext } from '../../../contexts/Contexts';
import useNamespace from '../../../hooks/useNamespace';
import handleJoinGame from '../scripts/handleJoinGame';

const JoinGameForm = ({ history }) => {
  const { socket } = useContext(SocketContext) || {};
  useNamespace('http://localhost:3000');

  return (
    <Formik
      initialValues={{
        gameId: '',
        nickname: '',
      }}
      onSubmit={(values) => handleJoinGame({ values, socket, history })}
    >
      <Form>
        <div className="form-group">
          <label>Game code</label>
          <Field name="gameId" className="form-control" placeholder="Game code" autoComplete="off" />
        </div>
        <div className="form-group">
          <label>Name</label>
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
