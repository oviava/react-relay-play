import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class PresentationItem extends Component {
  static propTypes = {
    presentation: PropTypes.object,
  }

  render() {
    const { presentation } = this.props;
    return (
      <td>
        <div className="text-left">
          <small>
            <Link to={`/presentations/${presentation.id}`} className="presentation-link">
              <strong>{presentation.title}</strong>
            </Link>
            <div className="text-info">
              {presentation.language ? `(${presentation.language})` : null }
            </div>
            <div className="text-warning">{presentation.speaker.name}</div>
          </small>
        </div>
      </td>
    );
  }
}


export default Relay.createContainer(PresentationItem, {
  fragments: {
    presentation: () => Relay.QL`
      fragment on Presentation {
        id,
        title,
        language,
        speaker {
          name
        }
      }
    `,
  },
});
