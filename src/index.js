import React from 'react';
import { render } from 'react-dom';

const documentSelector = document.getElementById('root');

class App extends React.Component {
  render() {
    return (
      <div>Hello World!!</div>
    );
  }
}

render(
  <App />,
  documentSelector
);
