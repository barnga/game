import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import aboutHeader from '../../data/aboutHeader';
import Team from './components/Team';
import Mission from './components/Mission';

const About = () => (
  <>
    <Header data={aboutHeader} />
    <Mission />
    <Team />
  </>
);

export default withBaseLayout(About);
