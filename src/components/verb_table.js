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

  render() {
    if (!this.props.verb) {
      return (
        <p>Vente...</p>
      )
    }
    const { verb } = this.props;

    return (
      <div>
        <span className="btn-group-xs">
          <Link className="btn-default margin-bottom" to="/">&laquo; powrót</Link>
        </span>

        <h3>polsk &rarr; {verb.polsk_verb}</h3>
        {renderPolishTable(verb)}
        <h3>norsk &rarr; {verb.norsk_verb}</h3>
        {renderNorwegianTable(verb)}

      </div>
    )
  }
}

function renderPolishTable(verb) {
  const persons = {
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
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Czas przeszły</th>
          <th scope="col">Czas teraźniejszy</th>
        </tr>
      </thead>
      {rows()}
    </table>
  )
}

function renderNorwegianTable(verb) {
  console.log(verb);
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th scope="col">Presens</th>
          <th scope="col">Preteritum</th>
          <th scope="col">Perfektum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Bokmål</th>
          <td>{verb.bokmal.presens}</td>
          <td>{verb.bokmal.preteritum}</td>
          <td>{verb.bokmal.perfektum}</td>
        </tr>
        <tr>
          <th scope="row">Nynorsk</th>
          <td>{verb.nynorsk.presens}</td>
          <td>{verb.nynorsk.preteritum}</td>
          <td>{verb.nynorsk.perfektum}</td>
        </tr>
      </tbody>
    </table>
  )
}


const mapStateToProps = state => {
  return {
    verb: state.verbs.chosen
  }
}

export default connect(mapStateToProps, { findVerbDetails })(VerbTable);