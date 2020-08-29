import React from 'react';
import Splash from './components/Splash';
import Features from './components/Features';
import withBaseLayout from '../../hocs/withBaseLayout';
import Explanation from './components/Explanation';

const Landing = () => (
  <>
    <Splash />
    <Explanation />
    <Features />
  </>
);

export default withBaseLayout(Landing);
