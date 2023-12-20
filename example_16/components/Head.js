import Head from 'next/head';
import { useEffect } from 'react';

const AppHead = ({ title, description }) => {
  useEffect(() => {
    document.title = title || 'Default Title';
  }, [title]);

  return (
    <Head>
      {description && <meta name="description" content={description} />}
    </Head>
  );
};

export default AppHead;
