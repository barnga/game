import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Svg from '../../../components/Svg';
import blob2 from '../../../assets/img/decorations/deco-blob-2.svg';
import dots6 from '../../../assets/img/decorations/deco-dots-6.svg';
import blob1 from '../../../assets/img/decorations/deco-blob-1.svg';
import divider from '../../../assets/img/dividers/divider-2.svg';

const Splash = () => (
  <div className="bg-primary text-light o-hidden position-relative">
    <div className="position-absolute w-100 h-100 o-hidden top-0">
      <div className="decoration right bottom scale-2">
        <Svg src={blob2} classNames="bg-primary-2" />
      </div>
      <div className="decoration right bottom scale-3">
        <Svg src={dots6} classNames="bg-white" />
      </div>
      <div className="decoration top left scale-2  d-none d-md-block">
        <Svg src={blob1} classNames="bg-primary-1" />
      </div>
    </div>
    <section className="min-vh-70 o-hidden d-flex flex-column justify-content-center">
      <Container>
        <Row className="justify-content-center text-center align-items-center">
          <Col className="col-xl-8 col-lg-9 col-md-10 layer-3">
            <h1 className="display-3">
              The ultimate intercultural
              <br />
              understanding game.
            </h1>
            <div className="mb-4">
              <p className="lead px-xl-5">
                Barnga allows you to educate others about culture, communication,
                and teamwork in a simple card game.
              </p>
            </div>
            <LinkContainer to="/play">
              <Button className="btn btn-lg btn-white mx-1">Play Now</Button>
            </LinkContainer>
            <Link to="/about">
              <Button className="btn btn-lg btn-dark mx-1">How to Play</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
    <div className="divider flip-x">
      <Svg src={divider} classNames="divider" />
    </div>
  </div>
);

export default Splash;
