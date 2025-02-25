import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App.jsx'

const anotherElement=(
  <div>
    <h1>Another Element</h1>
  </div>
)
const anotherElement1='Mr . Ansh'
const reactElement=React.createElement(
  'h1',
  {
   style: {
     color
     :'red',
     backgroundColor
     :'yellow'
   }
   
  },
  'hi darlings what are you doing',
  anotherElement1
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   {/* {anotherElement}
    {reactElement}
*/}
{reactElement}
  </StrictMode>,
)
