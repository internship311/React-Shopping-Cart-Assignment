import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/_base.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalContextProvider from './contexts/GlobalContext';
import reportWebVitals from './reportWebVitals';
import ProductContextProvider from './contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <GlobalContextProvider>
      <ProductContextProvider>
      <App />
      </ProductContextProvider>
    </GlobalContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
