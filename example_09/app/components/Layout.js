import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  
  const pageTitle = 'CodeHafeez';

  return (
    <div>
      <Header title={pageTitle} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
