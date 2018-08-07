import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class SelectedVerbsList extends Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    console.log(this.props);
    return this.props.selectedVerbs.map(verb => (
      <tr key={verb.norsk_verb}>
        <td>{verb.norsk_verb}</td>
        <td>{verb.bokmal.presens}</td>
        <td>{verb.bokmal.preteritum}</td>
        <td>{verb.bokmal.perfektum}</td>
        <td><Link to={`/czasownik/${verb.polsk_verb}`}>{verb.polsk_verb}</Link></td>
      </tr>
    ));
  }

  render() {
    if (!this.props.selectedVerbs.length) {
      return <tbody></tbody>
    }

    return (
      <tbody>
        {this.renderRows()}
      </tbody>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedVerbs: state.verbs.active
  }
}

export default connect(mapStateToProps)(SelectedVerbsList);
