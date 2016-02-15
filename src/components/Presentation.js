import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class Presentation extends Component {
  static propTypes = {
    presentation: PropTypes.object,
  }

  render() {
    const { presentation } = this.props;
    return (
      <div className="presentation-item">{presentation.title}</div>
    );
  }
}


export default Relay.createContainer(Presentation, {
  fragments: {
    presentation: () => Relay.QL`
      fragment on Presentation {
        id,
        title
      }
    `,
  },
});
