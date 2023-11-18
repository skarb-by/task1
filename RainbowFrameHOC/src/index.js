import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App.jsx';



const rootNode = document.getElementById('container')

const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)




