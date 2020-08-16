import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const withBaseLayout = (WrappedComponent) => {
  const WithBaseLayout = (props) => (
    <>
      <Navbar />
      <WrappedComponent {...props} />
      <Footer />
    </>
  );

  return WithBaseLayout;
};

export default withBaseLayout;
