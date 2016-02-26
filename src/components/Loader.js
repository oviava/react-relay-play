import React, { Component } from 'react';

class Loader extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <tr>
        <td colSpan={5}><div className="loader">Loading...</div></td>
      </tr>
    );
  }
}

export default Loader;
