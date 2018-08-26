import React, { Component } from "react";
import { connect } from "react-redux";

import VerbTable from "./verb_table";
import Spinner from "./spinner";
import { fetchVerbs } from "../actions";

class VerbShow extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.verbs.length) {
      this.props.fetchVerbs();
    }
  }

  render() {
    if (!this.props.verbs || this.props.verbs.length === 0) {
      return <Spinner />;
    }
    const { id } = this.props.match.params;
    // search always by norsk_verb
    const verb = this.props.verbs.find(v => {
      return v.norsk_verb === id || v.polsk_verb === id;
    }).norsk_verb;

    return <VerbTable id={verb} />;
  }
}

const mapStateToProps = state => {
  return {
    verbs: state.verbs.all
  };
};

export default connect(
  mapStateToProps,
  { fetchVerbs }
)(VerbShow);
