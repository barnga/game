import React from 'react';
import smile from '../../../assets/img/icons/theme/general/smile.svg';
import tools from '../../../assets/img/icons/theme/tools/tools.svg';
import thundermove from '../../../assets/img/icons/theme/general/thunder-move.svg';

import Svg from '../../../components/Svg';

const Features = () => (
  <section className="bg-primary text-light">
    <div className="container">
      <div className="row text-light mb-4">
        <div className="col">
          <h3 className="h1">Notable Features</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 d-flex mb-4">
          <Svg src={smile} classNames="icon icon-md" />
          <div className="ml-3">
            <h5>Perfect virtual activity</h5>
            <div>
              Barnga can be used as a group activity in any setting,
              whether it&apos;s for school or for work.
              Any number of people can join a game, which means that everyone
              can play while keeping socially distanced.
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 d-flex mb-4">
          <Svg src={tools} classNames="icon icon-md" />
          <div className="ml-3">
            <h5>Customizable</h5>
            <div>
              Game facilitators can easily adjust game
              settings, such as the number of players per group,
              time limits, and more. Facilitators can also update rulesheets
              in realtime, which was impossible when playing the physical game.
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 d-flex mb-4">
          <Svg src={thundermove} classNames="icon icon-md" />
          <div className="ml-3">
            <h5>Fast in-browser gameplay</h5>
            <div>
              The game runs completely in your browser -
              you don&apos;t need any special software to play!
              Smooth gameplay is guaranteed, which means that you can
              focus on playing without interruptions.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
