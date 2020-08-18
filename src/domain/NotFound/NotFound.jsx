import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/img/logo-white.svg';
import blob3 from '../../assets/img/decorations/deco-blob-3.svg';
import lines3 from '../../assets/img/decorations/deco-lines-3.svg';
import blob9 from '../../assets/img/decorations/deco-blob-9.svg';
import dots2 from '../../assets/img/decorations/deco-dots-2.svg';
import Svg from '../../components/Svg';

const NotFound = () => (
  <section className="min-vh-100 bg-primary-3 text-light py-5 o-hidden">
    <Container>
      <Row className="justify-content-center mb-md-6">
        <Col className="col-auto">
          <Link to="/">
            <Svg src={logo} />
          </Link>
        </Col>
      </Row>
      <Row className="text-center py-6">
        <Col className="layer-2">
          <h1 className="display-1 mb-0">404</h1>
          <h2 className="h1">Page not found</h2>
          <div className="lead mb-4">It appears the page you were looking for couldn’t be found.</div>
          <LinkContainer to="/">
            <Button size="lg">Go back home</Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
    <div className="decoration-wrapper d-none d-md-block">
      <div className="decoration right middle-y scale-2" data-jarallax-element="200">
        <Svg src={blob3} classNames="bg-primary-2" />
      </div>
      <div className="decoration right middle-y" data-jarallax-element="100">
        <Svg src={lines3} classNames="bg-primary" />
      </div>
      <div className="decoration top left scale-3" data-jarallax-element="50">
        <Svg src={blob9} classNames="bg-white" />
      </div>
      <div className="decoration top left scale-2 scale-3 blend-mode-multiply" data-jarallax-element="150 50">
        <Svg src={dots2} classNames="bg-primary-2" />
      </div>
    </div>
  </section>
);

export default NotFound;
