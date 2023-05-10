import React from 'react';
import HeaderClient from '../HeaderClient';
import { Footer } from '../Footer';



export function LayoutClient({ children }) {
  return (
    <>
      <HeaderClient />
        {children}
      <Footer />
    </>
  );
}
