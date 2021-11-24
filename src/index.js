import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import {ContextProvider} from './Context'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(
    <Router>
      <ContextProvider>
        <ScrollToTop/>
          <App />
      </ContextProvider>
    </Router>,
  document.getElementById('root')
);


