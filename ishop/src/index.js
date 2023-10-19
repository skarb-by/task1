import React from 'react';

import ReactDOMClient from 'react-dom/client';
import './index.css';
import Shop from './components/Shop';

import productsArr from './data/products.json';

const shopName = 'ZARA-Беларусь';

const rootNode = document.getElementById('container')

const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <Shop shopName={shopName} productsArr={productsArr} />
)

