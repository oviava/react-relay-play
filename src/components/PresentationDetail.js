import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class PresentationDetail extends Component {
  static propTypes = {
    node: PropTypes.object,
  }

  render() {
    const { node } = this.props;
    return (
      <div>{node.title}</div>
    );
  }
}

export default Relay.createContainer(PresentationDetail, {
  fragments: {
    node: () => Relay.QL`
      fragment on Presentation {
        id,
        title,
      }
    `,
  },
});
