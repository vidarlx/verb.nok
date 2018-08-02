import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class VerbShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="input-group-btn">
          <Link className="btn btn-success" to="/">back</Link>
        </span>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Czas przeszły</th>
              <th scope="col">Czas teraźniejszy</th>
              <th scope="col">Czas przyszły</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default VerbShow;
