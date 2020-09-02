import React from 'react';
import withBaseLayout from '../../hocs/withBaseLayout';
import Header from '../../components/Header';
import guideHeader from '../../data/guideHeader';

const Guide = () => (
  <>
    <Header data={guideHeader} />
  </>
);

export default withBaseLayout(Guide);
