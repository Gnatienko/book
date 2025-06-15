import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = cartItems.some(item => item.id === plant.id);

  return (
    <div className="plant-card">
      <img src={`/images/${plant.img}`} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button disabled={isAdded} onClick={() => dispatch(addItem(plant))}>
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;