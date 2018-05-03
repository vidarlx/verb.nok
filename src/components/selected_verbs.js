import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedVerbsList extends Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    return this.props.selectedVerbs.map(verb => (
      <tr key={verb.verb}>
        <td>{verb.verb}</td>
        <td>{verb.present}</td>
        <td>{verb.past}</td>
        <td>{verb.perfect}</td>
        <td>{verb.meaning_pl}</td>
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
