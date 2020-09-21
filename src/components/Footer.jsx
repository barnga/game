import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import blob1 from '../assets/img/decorations/deco-blob-1.svg';
import mail from '../assets/img/icons/theme/communication/mail.svg';
import Svg from './Svg';
import navItems from '../data/navItems';

const Footer = () => (
  <footer className="pb-4 bg-primary-3 text-light" id="footer">
    <Container>
      <Row className="mb-5">
        <Col>
          <div className="card card-body border-0 o-hidden mb-0 bg-primary text-light">
            <div
              className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"
            >
              <div className="h3 text-center mb-md-0">Start playing Barnga online</div>
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
            {navItems.map((navItem) => (
              <li className="nav-item" key={navItem.name}>
                <Link to={navItem.to} className="nav-link">
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="col-6 col-lg">
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li className="mb-3 d-flex">
              <Svg src={mail} classNames="icon" />
              <div className="ml-3">
                <a href="#">barngaproject@gmail.com</a>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
