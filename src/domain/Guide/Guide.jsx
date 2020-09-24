import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import guideHeader from '../../data/guideHeader';
import FAQ from './components/FAQ';

const Guide = () => (
  <>
    <Header data={guideHeader} />
    <FAQ />
  </>
);

export default withBaseLayout(Guide);
