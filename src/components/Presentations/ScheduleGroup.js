import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import PresentationRow from './PresentationRow';
import Loader from '../Loader.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ScheduleGroup extends Component {
  static propTypes = {
    schedule: PropTypes.object,
    relay: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.handleShowPresentations = this.handleShowPresentations.bind(this);
    this.renderPresentations = this.renderPresentations.bind(this);
    this.refreshPresentations = this.refreshPresentations.bind(this);
    this.state = {
      loading: false,
    };
  }

  handleShowPresentations() {
    const { relay } = this.props;
    this.setState({
      loading: true,
    }, () => relay.setVariables({
      showPresentations: !this.props.relay.variables.showPresentations,
    }, this.isReady));
  }

  refreshPresentations() {
    const { relay } = this.props;
    this.setState({
      loading: true,
    }, () => relay.forceFetch({}, this.isReady));
  }

  isReady({ ready, stale }) {
    // ready state https://facebook.github.io/relay/docs/guides-ready-state.html
    if (ready === true && stale === false) {
      this.setState({
        loading: false,
      });
    }
  }

  renderPresentations() {
    const { presentations } = this.props.schedule;
    return (
        presentations.map(
          (presentation) => <PresentationRow key={presentation.id} presentation={presentation} />
        )
    );
  }

  render() {
    const { schedule } = this.props;
    const { showPresentations } = this.props.relay.variables;
    const { loading } = this.state;
    const arrow = showPresentations ?
      'glyphicon glyphicon-triangle-bottom' :
      'glyphicon glyphicon-triangle-right';
    return (
      <tbody>
        <tr className="sr-header">
          <td colSpan={4} onClick={this.handleShowPresentations}>
            <span className={arrow}></span>{schedule.startTime} - { schedule.endTime }
          </td>
          <td onClick={this.refreshPresentations} style={{ width: '7%' }}>
            <div className="pr-status"></div>
          </td>
        </tr>
        { loading ? <Loader /> : (showPresentations ? this.renderPresentations() : null) }
      </tbody>
    );
  }
}

export default Relay.createContainer(ScheduleGroup, {
  initialVariables: {
    showPresentations: false,
  },
  fragments: {
    schedule: () => Relay.QL`
      fragment on Schedule {
        startTime,
        endTime,
        presentations @include(if: $showPresentations){
          id
          ${PresentationRow.getFragment('presentation')}
        }
      }
    `,
  },
});
