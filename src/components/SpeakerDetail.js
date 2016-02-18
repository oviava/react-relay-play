import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class SpeakerDetail extends Component {
  static propTypes = {
    node: PropTypes.object,
  }

  render() {
    const { node } = this.props;
    return (
      <div>{node.name}</div>
    );
  }
}

export default Relay.createContainer(SpeakerDetail, {
  fragments: {
    node: () => Relay.QL`
      fragment on Speaker {
        id,
        name,
        position,
      }
    `,
  },
});
