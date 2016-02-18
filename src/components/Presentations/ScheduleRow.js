import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import PresentationItem from './PresentationItem';
import ScheduleItem from './ScheduleItem';

class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.object,
  }

  sortPresentationsByRoom(p1, p2) {
    // if string compare it would be Room 1, Room 10, Room 2
    // so we extract the number in room name and sort by that
    const n1 = Number(p1.room.name.match(/\d/g));
    const n2 = Number(p2.room.name.match(/\d/g));
    return n1 - n2;
  }

  render() {
    const { schedule } = this.props;
    // we sort them by room number so we list them in the correct column
    const presentations = schedule.presentations.sort(this.sortPresentationsByRoom);
    return (
      <tr>
        <ScheduleItem schedule={schedule} />
        {presentations.map(node => <PresentationItem key={node.id} presentation={node} />)}
      </tr>
    );
  }
}

export default Relay.createContainer(Schedule, {
  fragments: {
    schedule: () => Relay.QL`
      fragment on Schedule {
        id,
        ${ScheduleItem.getFragment('schedule')},
        presentations{
          id,
          ${PresentationItem.getFragment('presentation')}
          room {
            id,
            name
          }
        }
      }
    `,
  },
});
