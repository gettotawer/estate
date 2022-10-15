import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

console.log(App)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);