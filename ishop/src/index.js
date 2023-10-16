import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import Shop from './components/Shop';

import productsArr from './data/products.json';

const shopName = 'ZARA-Беларусь';



ReactDOM.render(
  <React.StrictMode>
    <Shop shopName={shopName} productsArr={productsArr} />
  </React.StrictMode>,
  document.getElementById('container')
);

