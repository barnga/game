import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo.svg';
import Svg from './Svg';

const SimpleForm = ({ children }) => (
  <section className="min-vh-100 py-5">
    <Container>
      <Row className="justify-content-center mb-md-6">
        <Col className="col-auto">
          <Link to="/">
            <Svg src={logo} />
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center pt-6">
        <Col className="col-xl-4 col-lg-5 col-md-6">
          {children}
        </Col>
      </Row>
    </Container>
  </section>
);

SimpleForm.propTypes = { children: PropTypes.node };

export default SimpleForm;
