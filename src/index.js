import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Err404 from './pages/404';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route>
        <Err404 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
