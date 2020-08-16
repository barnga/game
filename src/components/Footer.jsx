import React from 'react';
import blob1 from '../assets/img/decorations/deco-blob-1.svg';
import marker1 from '../assets/img/icons/theme/map/marker-1.svg';
import call1 from '../assets/img/icons/theme/communication/call-1.svg';
import mail from '../assets/img/icons/theme/communication/mail.svg';
import Svg from './Svg';

const Footer = () => (
  <footer className="pb-4 bg-primary-3 text-light" id="footer">
    <div className="container">
      <div className="row mb-5">
        <div className="col">
          <div className="card card-body border-0 o-hidden mb-0 bg-primary text-light">
            <div
              className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center"
            >
              <div className="h3 text-center mb-md-0">Start building beautiful websites</div>
              <a href="#" className="btn btn-lg btn-white">
                Play Now
              </a>
            </div>
            <div className="decoration layer-0">
              <Svg src={blob1} classNames="bg-primary-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-6 col-lg-3 col-xl-2">
          <h5>Navigate</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">Demos</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Pages</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Elements</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg">
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
        </div>
        <div className="col-lg-5 col-xl-4 mt-3 mt-lg-0">
          <h5>Subscribe</h5>
          <p>
            The latest Leap news, articles, and resources,
            sent straight to your inbox every month.
          </p>
          <form action="/forms/mailchimp.php" data-form-email noValidate>
            <div className="form-row">
              <div className="col-12">
                <input type="email" className="form-control mb-2" placeholder="Email Address" name="email" required />
              </div>
              <div className="col-12">
                <div className="d-none alert alert-success" role="alert" data-success-message>
                  Thanks, a member of our team will be in touch shortly.
                </div>
                <div className="d-none alert alert-danger" role="alert" data-error-message>
                  Please fill all fields correctly.
                </div>
                <button type="submit" className="btn btn-primary btn-loading btn-block" data-loading-text="Sending">
                  <img
                    className="icon"
                    src="assets/img/icons/theme/code/loading.svg"
                    alt="loading icon"
                    data-inject-svg
                  />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </form>
          <small className="text-muted form-text">
            We’ll never share your details. See our
            <a href="#">Privacy Policy</a>
          </small>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-md-auto text-center">
          <small className="text-muted">
            &copy;2019 This page is protected by reCAPTCHA and is subject to the Google
            <a
              href="https://www.google.com/policies/privacy/"
            >
              Privacy Policy
            </a>
            {' '}
            and
            <a
              href="https://policies.google.com/terms"
            >
              Terms of Service.
            </a>
          </small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
