import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import Shop from './components/Shop';

import productsArr from './data/products.json';

const shopName = 'ZARA-Беларусь';

const rootNode = document.getElementById('container')

const root = ReactDOM.createRoot(rootNode)

root.render(
  <Shop shopName={shopName} productsArr={productsArr} />
)

