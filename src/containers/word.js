import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVerbs } from '../actions';
import SelectedVerbs from '../components/selected_verbs';

class Word extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVerbs();
  }

  render() {
    return (
      <div>
        <SelectedVerbs />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    verbs: state.all,
    active: state.active
  };
}

export default connect(mapStateToProps, { fetchVerbs })(Word);
