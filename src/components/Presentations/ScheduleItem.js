import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import moment from 'moment';

class ScheduleItem extends Component {
  static propTypes = {
    schedule: PropTypes.object,
  }

  render() {
    const { schedule } = this.props;
    const startTime = moment(new Date(schedule.startTime)).utc().format('HH:mm');
    const endTime = moment(new Date(schedule.endTime)).utc().format('HH:mm');
    return (
      <th scope="row">{startTime} - {endTime}</th>
    );
  }
}

export default Relay.createContainer(ScheduleItem, {
  fragments: {
    schedule: () => Relay.QL`
      fragment on Schedule {
        startTime,
        endTime
      },
    `,
  },
});
