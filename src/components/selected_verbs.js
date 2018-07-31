import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedVerbsList extends Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    return this.props.selectedVerbs.map(verb => (
      <tr key={verb.norsk_verb}>
        <td>{verb.norsk_verb}</td>
        <td>{verb.bokmal.presens}</td>
        <td>{verb.bokmal.preteritum}</td>
        <td>{verb.bokmal.perfektum}</td>
        <td>{verb.polsk_verb}</td>
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
