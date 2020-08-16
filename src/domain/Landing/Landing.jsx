import React from 'react';
import Splash from './components/Splash';
import Features from './components/Features';
import withBaseLayout from '../../hocs/withBaseLayout';

const Landing = () => (
  <>
    <Splash />
    <Features />
  </>
);

export default withBaseLayout(Landing);
