import React, { Component } from 'react';
import { connect } from 'react-redux';

import VerbTable from './verb_table';
import { fetchVerbs } from '../actions';

class VerbShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchVerbs();
  }

  render() {
    if (!this.props.verbs || this.props.verbs.length === 0) {
      return (
        <div> Vente....</div>
      )
    }
    const { id } = this.props.match.params;
    // search always by norsk_verb
    const verb = this.props.verbs.find((v) => {
      return v.norsk_verb === id || v.polsk_verb === id
    }).norsk_verb;

    return (
      <VerbTable id={verb} />
    )
  }
}

const mapStateToProps = state => {
  return {
    verbs: state.verbs.all
  }
}

export default connect(mapStateToProps, { fetchVerbs })(VerbShow);
