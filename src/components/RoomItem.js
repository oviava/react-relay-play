import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

class RoomItem extends Component {
  static propTypes = {
    room: PropTypes.object,
  }

  render() {
    const { room } = this.props;
    return (
      <th className="presentation-th">
        <div className="text-center text-primary">{room.name}</div>
        <small>
          <div className="text-center text-primary">({room.location})</div>
        </small>
      </th>
    );
  }
}

export default Relay.createContainer(RoomItem, {
  fragments: {
    room: () => Relay.QL`
      fragment on Room {
        name,
        location
      }
    `,
  },
});
