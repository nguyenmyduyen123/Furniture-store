import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-zhhqbsieonz8hu4s.us.auth0.com"
    clientId="MOsr2ZGfd68kRCI8T80mVr7lc6WSGvnf"
    redirectUri={window.location.origin} 
   
    cacheLocation="localstorage"
  >
  <UserProvider>
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </CartProvider>
    </FilterProvider>
  </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
    
);