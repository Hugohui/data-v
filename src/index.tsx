import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/QWeather-Icons-1.6.0/font/qweather-icons.css'
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Router =  process.env.REACT_APP_ROUTER_MODEL === 'HashRouter' ? HashRouter : BrowserRouter;

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
