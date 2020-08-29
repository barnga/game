import React from 'react';
import inner from '../../../assets/img/inner-2.jpg';
import divider from '../../../assets/img/dividers/divider-2.svg';
import Svg from '../../../components/Svg';

const Explanation = () => (
  <section className="has-divider">
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-md-5 col-xl-6 mb-4 mb-md-0">
          <img src={inner} alt="Video explanation" className="rounded shadow-3d" />
        </div>
        <div className="col-md-7 col-xl-6">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="mb-3">
                <span className="h1">How it Works</span>
              </div>
              <p className="lead">
                Barnga is an online card game that
                can help facilitate intercultural understanding.
                Verbal communication is banned and each player is given a different set of rules,
                forcing players to figure out a common set of rules to play by,
                communicating only by drawing pictures on a sketchpad.
              </p>
              <p className="lead mb-0">
                This challenging game mirrors the experiences of people
                from different cultures who may not share the same language.
                By digitizing this relatively obscure game, we make it easier
                for social scientists to study interactions between people of different cultures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="divider">
      <Svg src={divider} classNames="bg-primary" />
    </div>
  </section>
);

export default Explanation;
