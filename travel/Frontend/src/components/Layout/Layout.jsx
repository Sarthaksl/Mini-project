import React from 'react';
import Header from '../Header/Header';
import Routers from '../../router/Routers'; // Corrected path
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default Layout;
