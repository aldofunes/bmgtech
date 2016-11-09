import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../layouts/App';
import Home from '../views/Home';
import About from '../views/About';
import Apps from '../views/Apps';
import NotFound from '../views/NotFound';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="apps" component={Apps}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
