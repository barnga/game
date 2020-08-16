import React from 'react';
import blob1 from '../../../assets/img/decorations/deco-blob-1.svg';
import lines3 from '../../../assets/img/decorations/deco-lines-3.svg';
import dots1 from '../../../assets/img/decorations/deco-dots-1.svg';
import lines2 from '../../../assets/img/decorations/deco-lines-2.svg';
import divider from '../../../assets/img/dividers/divider-2.svg';
import Svg from '../../../components/Svg';

const Features = () => (
  <>
    <section className="o-hidden">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-lg-auto col-md-6 mb-4 mb-md-0">
            <div className="decoration position-relative">
              <Svg src={blob1} classNames="bg-primary" />
            </div>
            <div className="decoration top middle-x layer-1" data-jarallax-element="20 20">
              <Svg src={lines3} classNames="bg-primary-2" />
            </div>
            <div className="decoration bottom left layer-2" data-jarallax-element="-20 -20">
              <Svg src={dots1} classNames="bg-primary-3" />
            </div>
            <div className="decoration bottom right layer-2" data-jarallax-element="-20 0">
              <Svg src={lines2} classNames="bg-white" />
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <h3 className="h1">Stand out with unique visual appeal</h3>
            <p className="lead">
              Leap includes a stylish library of SVG decorations.
              Easily arrange your own unique collages and position
              them with intuitive CSS classes.
            </p>
            <a href="elements-decorations.html" className="lead hover-arrow fade-page">Explore SVG Deocrations</a>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-0 has-divider">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-xl-5 col-md-6 mb-4 mb-md-0">
            <h3 className="h1">Colour schemes made easy</h3>
            <p className="lead">
              Rock one of Leap&apos;s carefully curated colour schemes
              or roll your own using the clearly defined Sass
              variables.
            </p>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="row no-gutters rounded o-hidden border mb-3 shadow-sm">
              <div className="col p-4 bg-primary" />
              <div className="col p-4 bg-primary-alt" />
              <div className="col-auto px-4 py-3 bg-white">
                <div className="h6 mb-0">Primary 1</div>
                <span className="font-weight-bold text-muted">#375ABB</span>
              </div>
            </div>
            <div className="row no-gutters rounded o-hidden border mb-3 shadow-sm">
              <div className="col p-4 bg-primary-2" />
              <div className="col p-4 bg-primary-2-alt" />
              <div className="col-auto px-4 py-3 bg-white">
                <div className="h6 mb-0">Primary 2</div>
                <span className="font-weight-bold text-muted">#FB8F8A</span>
              </div>
            </div>
            <div className="row no-gutters rounded o-hidden border shadow-sm">
              <div className="col p-4 bg-primary-3" />
              <div className="col p-4 bg-primary-3-alt" />
              <div className="col-auto px-4 py-3 bg-white">
                <div className="h6 mb-0">Primary 3</div>
                <span className="font-weight-bold text-muted">#1B1F3B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <Svg src={divider} />
      </div>
    </section>
  </>
);

export default Features;
