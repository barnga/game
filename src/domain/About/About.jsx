import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import aboutHeaderData from '../../data/AboutHeaderData';

const About = () => (
  <>
    <Header data={aboutHeaderData} />
  </>
);

export default withBaseLayout(About);
