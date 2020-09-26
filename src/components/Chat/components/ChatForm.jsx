import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import handleMessageSend from '../scripts/handleMessageSend';
import { GameContext, SocketContext } from '../../../contexts/Contexts';

const ChatForm = ({ global, admin, roomId }) => {
  const { socket } = useContext(SocketContext) || {};
  const { gameState } = useContext(GameContext) || {};
  const [gameSettings] = gameState || [];

  return (
    <div className="p-2">
      <Formik
        initialValues={{
          message: '',
        }}
        onSubmit={(values, { resetForm }) => {
          handleMessageSend(socket, values, global, roomId);
          resetForm();
        }}
      >
        <Form className="w-100">
          <div className="form-group">
            <Field
              name="message"
              autoComplete="off"
              className="form-control"
              placeholder={gameSettings.disableChat ? 'Chat is disabled' : 'Send a message'}
              disabled={gameSettings.disableChat && !admin && !global}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

ChatForm.propTypes = {
  global: PropTypes.bool,
  admin: PropTypes.bool,
  roomId: PropTypes.string,
};

export default ChatForm;
