import React, { useContext, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import handleGameCreation from '../scripts/handleGameCreation';
import withSocket from '../../../hocs/withSocket';
import { SocketContext } from '../../../contexts/Contexts';
import useNamespace from '../../../hooks/useNamespace';
import baseURL from '../../../helpers/baseURL';
import CreateGameSchema from '../../../schemas/CreateGameSchema';
import setFieldError from '../../../helpers/setFieldError';

const CreateGameForm = ({ history }) => {
  const { socket } = useContext(SocketContext);

  useNamespace(baseURL);

  if (!socket) return <></>;

  return (
    <Formik
      initialValues={{
        playersPerRoom: 4,
        nickname: '',
      }}
      onSubmit={(values) => {
        handleGameCreation({ values, socket, history });
      }}
      validationSchema={CreateGameSchema}
    >
      {(props) => (
        <Form>
          <div className="form-group">
            <label className="form-control-label">Players Per Table</label>
            <Field
              name="playersPerRoom"
              autoComplete="off"
              className={setFieldError({ props, fieldName: 'playersPerRoom' })}
            />
          </div>
          <div className="form-group">
            <label className="form-control-label">Name</label>
            <Field
              name="nickname"
              autoComplete="off"
              className={setFieldError({ props, fieldName: 'nickname' })}
            />
          </div>
          <div className="form-group">
            <Button block variant="primary" type="submit">Create</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

CreateGameForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(CreateGameForm));
