import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './cart.css';
import CartItem from './CartItem';

function ShoppingCart({ cart, removeFromCart, isLoggedIn }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate and update the total price whenever the cart changes
    const calculateTotalPrice = () => {
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice(); // Initial calculation
  }, [cart]); // Re-run the effect whenever the cart changes

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="shopping-cart">
      <div className="">
        <p
          id="back"
          onClick={handleGoBack}
          style={{
            fontSize: '30px',
            position: 'absolute',
            marginLeft: '40px',
            marginTop: '40px',
            color: 'white',
          }}
        >
          ←<span style={{ fontSize: '30px' }}>Back</span>
        </p>

        <p className="logo">CART SUMMARY</p>
        <div>
          <i className="fas fa-cart-shopping"></i>
        </div>
      </div>

      <div className="container">
        <div className="head">
          <p>My Cart</p>
        </div>
        <div className="foot">
          <h2 id="total">Total: $ {totalPrice.toFixed(2)}</h2>
          {cart.length === 0 ? null : (
            <NavLink to={isLoggedIn ? '/checkout' : '/login'} style={{ color: 'black' }}>
              <h2>Proceed to Checkout</h2>
            </NavLink>
          )}
        </div>
        <div className="sidebar">
          <div id="cartItem">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item, index) => (
                  <CartItem key={index} item={item} handleDelete={removeFromCart} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
