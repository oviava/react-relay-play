import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import PresentationItem from './PresentationItem';
import ScheduleItem from './ScheduleItem';

class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.object,
  }

  render() {
    const { schedule } = this.props;
    return (
      <tr>
        <ScheduleItem schedule={schedule} />
        {schedule.presentations.map(node => <PresentationItem key={node.id} presentation={node} />)}
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
        }
      }
    `,
  },
});
