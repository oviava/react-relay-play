import Relay from 'react-relay';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default ViewerQueries;
