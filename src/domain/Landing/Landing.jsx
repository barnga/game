import React from 'react';
import blob2 from '../../assets/img/decorations/deco-blob-2.svg';
import dots6 from '../../assets/img/decorations/deco-dots-6.svg';
import blob1 from '../../assets/img/decorations/deco-blob-1.svg';
import divider from '../../assets/img/dividers/divider-2.svg';
import Svg from '../../components/Svg';

const Landing = () => (
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
      <div className="container">
        <div className="row justify-content-center text-center align-items-center">
          <div className="col-xl-8 col-lg-9 col-md-10 layer-3">
            <h1 className="display-3">
              Launch on time,
              <br />
              look on-trend.
            </h1>
            <div className="mb-4">
              <p className="lead px-xl-5">
                Save countless hours of design and development
                and ship performant sites with killer looks.
              </p>
            </div>
            <a href="#demos" className="btn btn-lg btn-white mx-1">View Demos</a>
            <a href="#" className="btn btn-lg btn-primary-3 mx-1">Purchase</a>
          </div>
        </div>
      </div>
    </section>
    <div className="divider flip-x">
      <Svg src={divider} classNames="divider" />
    </div>
  </div>
);

export default Landing;
