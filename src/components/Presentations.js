import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import Presentation from './Presentation';


class Presentations extends Component {
  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    const { presentations } = this.props.viewer;
    return (
      <div className="presentations-container">
        {presentations.edges.map(pr => <Presentation key={pr.node.id} presentation={ pr.node } />)}
      </div>
    );
  }
}

export default Relay.createContainer(Presentations, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        presentations(first: 100) {
          edges {
            node {
              id
              ${Presentation.getFragment('presentation')}
            }
          }
        }
      }
    `,
  },
});
