import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import guideHeaderData from '../../data/GuideHeaderData';

const Guide = () => (
  <>
    <Header data={guideHeaderData} />
  </>
);

export default withBaseLayout(Guide);
