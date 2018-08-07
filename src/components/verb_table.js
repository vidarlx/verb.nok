import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { findVerbDetails } from '../actions';

class VerbTable extends Component {
  componentDidMount() {
    const verb = this.props.id;
    this.props.findVerbDetails(verb);
  }

  render () {
    console.log(this.props)
    if (!this.props.verb) {
      return (
        <p>Vente...</p>
      )
    }
    const { verb } = this.props;
    return (
      <div>
        <span className="input-group-btn">
          <Link className="btn btn-success" to="/">powrót</Link>
        </span>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Czas przeszły</th>
              <th scope="col">Czas terazniejszy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ja</th>
              <td>{verb.polsk.przeszły.ja}</td>
              <td>{verb.polsk.terazniejszy.ja}</td>
            </tr>
            <tr>
              <th scope="row">Ty</th>
              <td>{verb.polsk.przeszły.ty}</td>
              <td>{verb.polsk.terazniejszy.ty}</td>
            </tr>
            <tr>
              <th scope="row">On/ona/ono</th>
              <td>{verb.polsk.przeszły.on}</td>
              <td>{verb.polsk.terazniejszy.on}</td>
            </tr>
            <tr>
              <th scope="row">My</th>
              <td>{verb.polsk.przeszły.my}</td>
              <td>{verb.polsk.terazniejszy.my}</td>
            </tr>
            <tr>
              <th scope="row">Wy</th>
              <td>{verb.polsk.przeszły.wy}</td>
              <td>{verb.polsk.terazniejszy.wy}</td>
            </tr>
            <tr>
              <th scope="row">Oni/One</th>
              <td>{verb.polsk.przeszły.oni}</td>
              <td>{verb.polsk.terazniejszy.oni}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    verb: state.verbs.chosen
  }
}

export default connect(mapStateToProps, { findVerbDetails })(VerbTable);