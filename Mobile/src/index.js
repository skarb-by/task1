import React, { Suspense } from 'react';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import clientsArr from './data/products.json';

const LazyShop = React.lazy(() => import("./components/MobileCompany/MobileCompany.jsx"));
const rootNode = document.getElementById('container')
const root = ReactDOMClient.createRoot(rootNode)



root.render(
  <StrictMode>
    <Suspense fallback={<div style={{ fontSize: "100px" }}>Загрузка...</div>}>
      <LazyShop clients={clientsArr} />
    </Suspense>
  </StrictMode>
)

