import React, { useContext, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Alert, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import withSocket from '../../../hocs/withSocket';
import { SocketContext } from '../../../contexts/Contexts';
import useNamespace from '../../../hooks/useNamespace';
import handleJoinGame from '../scripts/handleJoinGame';
import JoinGameSchema from '../../../schemas/JoinGameSchema';
import setFieldError from '../../../helpers/setFieldError';
import useQuery from '../../../helpers/useQuery';
import baseURL from '../../../helpers/baseURL';

const JoinGameForm = ({ history }) => {
  const { socket } = useContext(SocketContext) || {};
  const [showError, setShowError] = useState(false);
  const { gameId } = useParams();
  useNamespace(baseURL);

  const query = useQuery();
  const adminToken = query.get('token');
  const [showAdmin, setShowAdmin] = useState(adminToken != null);

  if (!socket) return <></>;

  return (
    <>
      {showAdmin && (
        <Alert
          variant="success"
          show={showAdmin}
          onClose={() => setShowAdmin(false)}
          dismissible
        >
          You are joining as an admin. If you would like to join as a player, click{' '}
          <Alert.Link href={`/play/${gameId ?? ''}`}>here</Alert.Link>.
        </Alert>
      )}
      <Formik
        initialValues={{
          gameId: gameId ?? '',
          nickname: '',
        }}
        onSubmit={(values) => {
          handleJoinGame({ values, socket, history }, adminToken)
            .then((success) => {
              if (!success) setShowError(true);
            });
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
              <Button block variant="primary" type="submit">{adminToken == null ? 'Play' : 'Join as Admin'}</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

JoinGameForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(withSocket(JoinGameForm));
