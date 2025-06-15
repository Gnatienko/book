import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItem, decreaseItem, deleteItem } from '../redux/cartSlice';

const CartPage = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {items.reduce((sum, item) => sum + item.quantity, 0)}</p>
      <p>Total Cost: ${totalCost}</p>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/images/${item.img}`} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </div>
        </div>
      ))}
      <button disabled>Checkout - Coming Soon</button>
      <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
    </div>
  );
};

export default CartPage;