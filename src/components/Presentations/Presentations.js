import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import ScheduleGroup from './ScheduleGroup';


class Presentations extends Component {
  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    const { schedules } = this.props.viewer;
    return (
      <div className="row">
        <h1>Presentations</h1>
        <table className="table">
          {schedules.edges.map(
            ({ node }) => <ScheduleGroup key={node.id} schedule={node} />
          )}
        </table>
      </div>
    );
  }
}

export default Relay.createContainer(Presentations, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        schedules(first: 10) {
          edges {
            node {
              id,
              ${ScheduleGroup.getFragment('schedule')}
            }
          }
        }
      }
    `,
  },
});
