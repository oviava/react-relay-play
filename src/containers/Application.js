import React, { Component, PropTypes } from 'react';
import NavBar from '../components/NavBar';

class Application extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <NavBar />
        <section id="main" className="container">
          { children }
        </section>
      </div>
    );
  }
}

export default Application;
