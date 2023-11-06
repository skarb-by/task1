import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from '../src/App/App.jsx'

import productsArr from './data/products.json';





const rootNode = document.getElementById('container')

const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <StrictMode>
  <App productsArr={productsArr} />
  </StrictMode>
)

