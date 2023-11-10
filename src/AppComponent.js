import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import './App.css';

import LoginSignup from './components/LoginSignup';
import ProductDetail from './components/ProductDetails';
import Products from './components/Products'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ShoppingCart from './components/cart';
import { useCart } from './components/CartContext';

function AppComponents() {
  const { cart, addToCart, removeFromCart, emptyCart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
 
  useEffect(() => {
    document.title = 'Snick-Inn'; 
  }, []);
  
  console.log(cart);  // Corrected console.log

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Navbar cartLength={cart.length}  isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/login" element={<LoginSignup setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout}/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart isLoggedIn={isLoggedIn}cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppComponents;
