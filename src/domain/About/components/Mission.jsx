import React from 'react';

const Mission = () => (
  <section>
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-md-5 col-xl-6 mb-4 mb-md-0">
          <img src="" alt="Insert Cool" className="rounded shadow-3d" />
        </div>
        <div className="col-md-7 col-xl-6">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <span className="badge badge-primary">Our Mission</span>
              <div className="my-3">
                <span className="h1">Facilitate intercultural understanding.</span>
              </div>
              <p className="lead">
                We began developing the Barnga Project as part of the 2019
                Mozilla Sprint for Internet Health. The result is
                a digital and easily accessible version
                of the Barnga card game. Our hope is for the Barnga Project to be a
                tool used in the study of interpersonal communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Mission;
