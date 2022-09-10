import Header from './Header';
import Footer from './Footer';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <div className='mt-16 flex flex-col'>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
