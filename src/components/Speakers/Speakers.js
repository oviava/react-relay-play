import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import SpeakerItem from './SpeakerItem';

class Speakers extends Component {
  static propTypes = {
    viewer: PropTypes.object,
  }

  render() {
    const { speakers } = this.props.viewer;
    return (
      <div className="speakers-container">
      {
        speakers.edges.map(
          ({ node }) => <SpeakerItem key={node.id} speaker={node} />
        )
      }
      </div>
    );
  }
}

export default Relay.createContainer(Speakers, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        speakers(first: 100) {
          edges {
            node {
              id,
              ${SpeakerItem.getFragment('speaker')}
            }
          }
        }
      }
    `,
  },
});
