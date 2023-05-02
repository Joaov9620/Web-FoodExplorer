
import React from 'react';
import Header from '../Header';
import { Footer } from '../Footer';

import { HeaderProvider } from '../../hooks/HeaderContext';


export function Layout({ children }) {

  return (
      <HeaderProvider>
      <Header/>
        {children}
      <Footer />
      </HeaderProvider>
  );
}
