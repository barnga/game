import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import blob1 from '../assets/img/decorations/deco-blob-1.svg';
import marker1 from '../assets/img/icons/theme/map/marker-1.svg';
import call1 from '../assets/img/icons/theme/communication/call-1.svg';
import mail from '../assets/img/icons/theme/communication/mail.svg';
import Svg from './Svg';

const Footer = () => (
  <footer className="pb-4 bg-primary-3 text-light" id="footer">
    <Container>
      <Row className="mb-5">
        <Col>
          <div className="card card-body border-0 o-hidden mb-0 bg-primary text-light">
            <div
              className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"
            >
              <div className="h3 text-center mb-md-0">Start building beautiful websites</div>
              <LinkContainer to="/play">
                <Button variant="white" size="lg">
                  Play Now
                </Button>
              </LinkContainer>
            </div>
            <div className="decoration layer-0">
              <Svg src={blob1} classNames="bg-primary-2" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="col-6 col-lg-3 col-xl-2">
          <h5>Navigate</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">Create Game</Link>
            </li>
            <li className="nav-item">
              <Link to="/play" className="nav-link">Play</Link>
            </li>
          </ul>
        </Col>
        <Col className="col-6 col-lg">
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li className="mb-3 d-flex">
              <Svg src={marker1} classNames="icon" />
              <div className="ml-3">
                <span>
                  348 Greenpoint Avenue
                  <br />
                  Brooklyn, NY
                </span>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <Svg src={call1} classNames="icon" />
              <div className="ml-3">
                <span>+61 3928 3324</span>
                <span className="d-block text-muted text-small">Mon - Fri 9am - 5pm</span>
              </div>
            </li>
            <li className="mb-3 d-flex">
              <Svg src={mail} classNames="icon" />
              <div className="ml-3">
                <a href="#">hello@company.io</a>
              </div>
            </li>
          </ul>
        </Col>
        <Col className="col-lg-5 col-xl-4 mt-3 mt-lg-0">
          <h5>Subscribe</h5>
          <p>
            The latest Leap news, articles, and resources,
            sent straight to your inbox every month.
          </p>
          <form action="" data-form-email noValidate>
            <div className="form-row">
              <div className="col-12">
                <input type="email" className="form-control mb-2" placeholder="Email Address" name="email" required />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-loading btn-block">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
