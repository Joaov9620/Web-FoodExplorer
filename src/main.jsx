import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import {Routes} from './routes';
import { AuthProvider } from './hooks/auth';
import { HeaderProvider } from './hooks/HeaderContext';
import {CartProvider} from './hooks/CartContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <AuthProvider>
          <HeaderProvider>
            <CartProvider>
              <Routes/>
            </CartProvider>
          </HeaderProvider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
