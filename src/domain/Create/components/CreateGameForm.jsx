import React, { useContext, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleGameCreation from '../scripts/handleGameCreation';
import withSocket from '../../../hocs/withSocket';
import { SocketContext } from '../../../contexts/Contexts';
import useNamespace from '../../../hooks/useNamespace';

const CreateGameForm = ({ history }) => {
  const { socket } = useContext(SocketContext);
  useNamespace('http://localhost:3000');

  useEffect(() => {
    localStorage.setItem('role', 'teacher');
  }, []);

  if (!socket) return <></>;

  return (
    <Formik
      initialValues={{
        timeLimit: '',
      }}
      onSubmit={(values) => {
        handleGameCreation({ values, socket, history });
      }}
    >
      <Form>
        <div className="form-group">
          <Field name="timeLimit" className="form-control" placeholder="5 minutes" autoComplete="off" />
        </div>
        <div className="form-group">
          <Button block variant="primary" type="submit">Create game</Button>
        </div>
      </Form>
    </Formik>
  );
};

CreateGameForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(CreateGameForm));
