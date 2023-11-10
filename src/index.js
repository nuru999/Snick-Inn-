import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponents from './AppComponent';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <AppComponents />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();