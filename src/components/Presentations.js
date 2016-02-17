import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import ScheduleRow from './ScheduleRow';
import RoomItem from './RoomItem';


class Presentations extends Component {
  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    const { rooms, schedules } = this.props.viewer;
    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              {rooms.edges.map(
                ({ node }) => <RoomItem key={node.id} room={node} />
              )}
            </tr>
          </thead>
          <tbody>
            {schedules.edges.map(
              ({ node }) => <ScheduleRow key={node.id} schedule={node} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Relay.createContainer(Presentations, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        rooms(first: 10) {
          edges {
            node {
              id,
              ${RoomItem.getFragment('room')}
            }
          }
        }
        schedules(first: 10) {
          edges {
            node {
              id,
              ${ScheduleRow.getFragment('schedule')}
            }
          }
        }
      }
    `,
  },
});
