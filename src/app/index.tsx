import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Index from './page/Index'

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,

  document.getElementById('app')
);