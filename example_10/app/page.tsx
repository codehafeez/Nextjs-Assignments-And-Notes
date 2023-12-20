import React from 'react';
import Layout from './components/Layout';

const Home = () => {
  const pageTitle = 'CodeHafeez';
  return (
    <Layout pageTitle={pageTitle}>
      <div>
        <p>This is the body content of the home page.</p>
      </div>
    </Layout>
  );
};

export default Home;
