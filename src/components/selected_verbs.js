import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class SelectedVerbsList extends Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    return this.props.selectedVerbs.map((verb, index) => (
      <li className="list-group-item" key={index}>
        <strong>{verb.norsk_verb}</strong> -&nbsp;
        <span>{verb.bokmal.presens} -&nbsp;</span>
        <span>{verb.bokmal.preteritum} -&nbsp;</span>
        <span>{verb.bokmal.perfektum} -&nbsp;</span>
        <Link to={`/czasownik/${verb.polsk_verb}`}>{verb.polsk_verb}</Link>
      </li>
    ));
  }

  render() {
    if (!this.props.selectedVerbs.length) {
      return <div></div>
    }

    return (
      <ul className="list-group">
        {this.renderRows()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedVerbs: state.verbs.active
  }
}

export default connect(mapStateToProps)(SelectedVerbsList);
