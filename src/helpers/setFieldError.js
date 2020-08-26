import { getIn } from 'formik';

const setFieldError = ({ props, fieldName }) => {
  if (getIn(props.errors, fieldName) && getIn(props.touched, fieldName)) {
    return 'form-control is-invalid';
  }
  return 'form-control';
};

export default setFieldError;
