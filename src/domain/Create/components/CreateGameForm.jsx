import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';

const CreateGameForm = () => (
  <Formik
    initialValues={{
      something: '',
    }}
    onSubmit={(values) => {
      // socket.emit('')
      console.log(values.something);
    }}
  >
    <Form>
      <div className="form-group">
        <Field name="something" className="form-control" placeholder="something" />
      </div>
      <div className="form-group">
        <Button block variant="primary" type="submit">Create game</Button>
      </div>
    </Form>
  </Formik>
);

export default CreateGameForm;
