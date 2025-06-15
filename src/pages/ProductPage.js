import React from 'react';
import PlantCard from '../components/PlantCard';
import './ProductPage.css';

const products = [
  { id: '1', name: 'Snake Plant', price: 12.99, category: 'Low Light', img: 'snake.jpg' },
  { id: '2', name: 'Peace Lily', price: 15.49, category: 'Flowering', img: 'peace.jpg' },
  { id: '3', name: 'Aloe Vera', price: 10.99, category: 'Succulent', img: 'aloe.jpg' },
  { id: '4', name: 'Fiddle Leaf Fig', price: 22.00, category: 'Decorative', img: 'fiddle.jpg' },
  { id: '5', name: 'Spider Plant', price: 9.99, category: 'Hanging', img: 'spider.jpg' },
  { id: '6', name: 'ZZ Plant', price: 14.50, category: 'Low Light', img: 'zz.jpg' }
];

const ProductPage = () => {
  return (
    <div className="products">
      {products.map(p => <PlantCard key={p.id} plant={p} />)}
    </div>
  );
};

export default ProductPage;