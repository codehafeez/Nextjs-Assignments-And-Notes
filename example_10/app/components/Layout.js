import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pageTitle }) => {
  
  return (
    <div>
      <Header title={pageTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
