import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { findVerbDetails } from '../actions';

class TableRow extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.person}</th>
        <td>{this.props.past}</td>
        <td>{this.props.present}</td>
      </tr>
    )
  }
}

class VerbTable extends Component {
  componentDidMount() {
    const verb = this.props.id;
    this.props.findVerbDetails(verb);
  }

  render () {
    if (!this.props.verb) {
      return (
        <p>Vente...</p>
      )
    }
    const { verb } = this.props;
    console.log(verb);
    const persons =  {
      ja: "ja",
      ty: "ty",
      on: 'ona/ona/ono',
      my: "my",
      wy: "wy",
      oni: 'oni/one'
    };

    const rows = () => {
      const rows = [];
      const keys = Object.keys(persons);
      for (let i in persons) {
        let person = persons[i];
        rows.push(
          <TableRow key={i}
            person={person}
            past={verb.polsk.przeszły[i]} 
            present={verb.polsk.terazniejszy[i]} 
          />    
        )
      }
      return rows;
    }

    return (
      <div>
        <span className="input-group-btn">
          <Link className="btn btn-success margin-bottom" to="/">powrót</Link>
        </span>

        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Czas przeszły</th>
              <th scope="col">Czas terazniejszy</th>
            </tr>
          </thead>
          {rows()}
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