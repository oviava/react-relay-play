// REACT  & Relay
import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';

// Router
import { RelayRouter } from 'react-router-relay';
import { Route, browserHistory } from 'react-router';

// Queries
import ViewerQueries from './queries/ViewerQueries';

// Components
import Presentations from './components/Presentations';
import Application from './containers/Application';

// css
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3001/graphql')
);

const documentSelector = document.getElementById('root');

render(
  <RelayRouter history={browserHistory}>
    <Route path="/" component={Application}>
      <Route path="presentations" component={Presentations} queries={ViewerQueries}/>
    </Route>
  </RelayRouter>,
  documentSelector
);
