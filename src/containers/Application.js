import React, { Component, PropTypes } from 'react';
import TabBar from '../components/TabBar';

class Application extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <section className="main">
          { children }
        </section>
        <TabBar />
      </div>
    );
  }
}

export default Application;
