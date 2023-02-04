import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Navbar, Sidebar, Footer } from './components'

import {Home, About, Auth, Cart, Checkout, Error, Products, SingleProduct, PrivateRoute} from './pages'

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/cart" element={ <Cart/> } />
      <Route path="/auth" element={ <Auth/> } />
      <Route path="/products" element={ <Products/> } />
      <Route path="/product/:id" element={ <SingleProduct/> } />
      <Route 
      path="/checkout" 
      element={ 
      <PrivateRoute>
         <Checkout/>
      </PrivateRoute>
       } />
      <Route path="*" element={ <Error/> } />
    </Routes>
    <Footer/>

    </div>
    
  ) 
}

export default App
