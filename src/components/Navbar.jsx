import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import logoWhite from '../assets/img/logo-white.svg';
import logoDark from '../assets/img/logo.svg';
import Svg from './Svg';
import navItems from '../data/NavbarData';

const Navbar = () => {
  const location = useLocation();
  const navSettings = {
    '/': {
      classNames: 'navbar navbar-expand-lg navbar-dark',
      overlay: true,
      isDark: true,
    },
    '/about': {
      classNames: 'navbar navbar-expand-lg navbar-transparent navbar-light bg-primary-alt',
      overlay: null,
      isDark: false,
    },
    '/guide': {
      classNames: 'navbar navbar-expand-lg navbar-transparent navbar-light bg-primary-alt',
      overlay: null,
      isDark: false,
    },
  }[location.pathname];

  return (
    <div className="navbar-container">
      <nav
        className={navSettings.classNames}
        data-overlay={navSettings.overlay}
        data-sticky="top"
      >
        <Container>
          <Link to="/" className="navbar-brand fade-page">
            <Svg src={navSettings.isDark ? logoWhite : logoDark} />
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
              <Button variant={navSettings.isDark ? 'white' : 'primary'} className="ml-lg-3">
                Play Now
              </Button>
            </LinkContainer>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
