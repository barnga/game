import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import aboutHeaderData from '../../data/AboutHeaderData';
import Team from './components/Team';
import Mission from './components/Mission';

const About = () => (
  <>
    <Header data={aboutHeaderData} />
    <Mission />
    <Team />
  </>
);

export default withBaseLayout(About);
