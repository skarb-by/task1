import React from 'react';

import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import Filter from './components/Filter.jsx';

const data = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

const rootNode = document.getElementById('container')

const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <Filter data={data} />
)




