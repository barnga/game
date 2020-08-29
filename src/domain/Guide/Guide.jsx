import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import headerData from '../../data/GuideHeaderData';

const Guide = () => (
  <>
    <Header data={headerData} />
  </>
);

export default withBaseLayout(Guide);
