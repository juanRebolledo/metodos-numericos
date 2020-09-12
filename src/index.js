import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';

ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root')
);
