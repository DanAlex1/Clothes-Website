import { Fragment } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <Fragment>
        <Home />
      </Fragment>
    </Router>
  );
}

export default App;