import React, { useContext } from 'react';
import { Field, Form, Formik } from 'formik';
import handleMessageSend from '../scripts/handleMessageSend';
import { SocketContext } from '../../../contexts/Contexts';

const ChatForm = () => {
  const { socket } = useContext(SocketContext) || {};

  return (
    <Formik
      initialValues={{
        message: '',
      }}
      onSubmit={(values, { resetForm }) => {
        handleMessageSend(socket, values);
        resetForm();
      }}
    >
      <Form className="w-100">
        <div className="form-group">
          <Field
            name="message"
            autoComplete="off"
            className="form-control"
            placeholder="Send a message"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default ChatForm;
