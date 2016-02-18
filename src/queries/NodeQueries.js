import Relay from 'react-relay';

const NodeQueries = {
  node: () => Relay.QL`query {
    node(id: $id)
  }`,
};

export default NodeQueries;
