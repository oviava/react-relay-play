// REACT  & Relay
import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';

// Router
import { RelayRouter } from 'react-router-relay';
import { Route, browserHistory } from 'react-router';

// Queries
import ViewerQueries from './queries/ViewerQueries';
import NodeQueries from './queries/NodeQueries';

// Components
import Presentations from './components/Presentations/Presentations';
import Speakers from './components/Speakers/Speakers';
import SpeakerDetail from './components/SpeakerDetail';
import PresentationDetail from './components/PresentationDetail';
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
      <Route path="/presentations" component={Presentations} queries={ViewerQueries} />
      <Route path="/speakers" component={Speakers} queries={ViewerQueries} />
      <Route path="/speakers/:id" component={SpeakerDetail} queries={NodeQueries} />
      <Route path="/presentations/:id" component={PresentationDetail} queries={NodeQueries} />
    </Route>
  </RelayRouter>,
  documentSelector
);
