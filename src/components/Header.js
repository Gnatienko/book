import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const total = useSelector(state => state.cart.totalQuantity);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 ({total})</Link>
      </nav>
    </header>
  );
};

export default Header;