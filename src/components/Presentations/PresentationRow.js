import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';
import { ReactCSSTransitionGroup } from 'react-addons-css-transition-group';


class PresentationRow extends Component {
  static propTypes = {
    presentation: PropTypes.object,
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { presentation } = this.props;
    return (
        <tr className="presentation-tr">
          <td className="presentation-title">
            <Link to={`/presentations/${presentation.id}`}>{presentation.title}</Link>
          </td>
          <td className="text-primary">
            <Link to={`/speakers/${presentation.speaker.id}`}>{presentation.speaker.name}</Link>
          </td>
          <td className="text-warning">{presentation.language}</td>
          <td>
            <Link to={`/rooms/${presentation.room.id}`} title={presentation.room.location}>
            {presentation.room.name}
            </Link>
          </td>
          <td><button className="btn btn-warning btn-sm">Attend</button></td>
        </tr>
    );
  }
}

export default Relay.createContainer(PresentationRow, {
  fragments: {
    presentation: () => Relay.QL`
      fragment on Presentation {
        id,
        title,
        language,
        room {
          id,
          name,
          location
        },
        speaker {
          id,
          name
        }
      }
    `,
  },
});
