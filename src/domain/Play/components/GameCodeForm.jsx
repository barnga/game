import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';

const GameCodeForm = () => (
  <Formik
    initialValues={{
      gameCode: '',
    }}
    onSubmit={(values) => {
      // socket.emit('')
      console.log(values.gameCode);
    }}
  >
    <Form>
      <div className="form-group">
        <Field name="gameCode" className="form-control" placeholder="Game code" />
      </div>
      <div className="form-group">
        <Button block variant="primary" type="submit">Play</Button>
      </div>
    </Form>
  </Formik>
);

export default GameCodeForm;
