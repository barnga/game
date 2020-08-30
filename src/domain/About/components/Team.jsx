import React from 'react';
import steven from '../../../assets/img/team/steven.jpg';

const Team = () => (
  <section>
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <h2 className="h1">The Team</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5">
          <img src="" alt="Sequoyah Sudler" className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">Sequoyah Sudler</h5>
            <p>Lead Developer</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5">
          <img src="" alt="Dylan Marchlinski" className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">Dylan Marchlinski</h5>
            <p>Developer</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5">
          <img src="" alt="Avinesh Sriram" className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">Avinesh Sriram</h5>
            <p>Frontend Developer and Content Writer</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5">
          <img src="" alt="Robert May" className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">Robert May</h5>
            <p>Backend Devloper</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 d-flex align-items-center mb-5">
          <img src={steven} alt="Steven Pu" className="avatar avatar-xlg mr-3" />
          <div>
            <h5 className="mb-0">Steven Pu</h5>
            <p>Creative Design</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
