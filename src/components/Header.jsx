import React from 'react';
import PropTypes from 'prop-types';
import divider from '../assets/img/dividers/divider-2.svg';
import dots from '../assets/img/decorations/deco-dots-2.svg';
import blob from '../assets/img/decorations/deco-blob-1.svg';
import Svg from './Svg';

const Header = ({ data }) => (
  <section className="bg-primary-alt header-inner o-hidden">
    <div className="container">
      <div className="row py-6 text-center justify-content-center align-items-center layer-2">
        <div className="col-xl-8 col-lg-10">
          <h1 className="display-4">{data.title}</h1>
          <p className="lead mb-0">{data.caption}</p>
        </div>
      </div>
    </div>
    <div className="divider layer-1">
      <Svg src={divider} classNames={divider} />
    </div>
    <div className="decoration middle-y right scale-2 d-none d-lg-block" data-jarallax-element="100">
      <Svg src={dots} classNames="bg-primary-2" />
    </div>
    <div className="decoration middle-y right blend-mode-multiply d-none d-xl-block" data-jarallax-element="50 50">
      <Svg src={blob} classNames="bg-primary" />
    </div>
  </section>
);

Header.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
  }),
};

export default Header;
