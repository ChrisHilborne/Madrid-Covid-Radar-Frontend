import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './i18n';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// local styles
import './styles/rfs.css';
import './styles/app.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

