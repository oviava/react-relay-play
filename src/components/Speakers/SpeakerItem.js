import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

class SpeakerItem extends Component {
  static propTypes = {
    speaker: PropTypes.object,
  }

  render() {
    const { speaker } = this.props;
    return (
      <Link to={`/speakers/${speaker.id}`} className="speaker-link">
        <div className="speaker-item">
          <div className="speaker-img">
            <img className="img-responsive img-fixed" src={`/img/${speaker.imgUrl}`} />
          </div>
          <div className="speaker-name">
            {speaker.name}
          </div>
          <div className="speaker-position">
            {speaker.position}
          </div>
          <div className="speaker-company text-primary">
            {speaker.company}
          </div>
        </div>
      </Link>
    );
  }
}

export default Relay.createContainer(SpeakerItem, {
  fragments: {
    speaker: () => Relay.QL`
      fragment on Speaker {
        name,
        imgUrl,
        company,
        position,
        id
      }
    `,
  },
});
