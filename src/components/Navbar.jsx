import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-white.svg';
import Svg from './Svg';
import navItems from '../data/NavbarData';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-dark" data-overlay="" data-sticky="top">
      <Container>
        <Link to="/" className="navbar-brand fade-page">
          <Svg src={logo} />
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="py-2 py-lg-0">
            <ul className="navbar-nav">
              {navItems.map((navItem) => (
                <li className="nav-item" key={navItem.name}>
                  <Link to={navItem.to} className="nav-link">
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <LinkContainer to="/play">
            <Button variant="white" className="ml-lg-3">Play Now</Button>
          </LinkContainer>
        </div>
      </Container>
    </nav>
  </div>
);

export default Navbar;
