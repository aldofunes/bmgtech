import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../layouts/App';
import Home from '../views/Home';
import About from '../views/About';
import Apps from '../views/Apps';
import Sites from '../views/Sites';
import Work from '../views/Work';
import Contact from '../views/Contact';
import PrivacyPolicy from '../views/PrivacyPolicy';
import NotFound from '../views/NotFound';

const Routes = () => (
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="apps" component={Apps}/>
      <Route path="sites" component={Sites}/>
      <Route path="work" component={Work}/>
      <Route path="contact" component={Contact}/>
      <Route path="privacy" component={PrivacyPolicy}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;
