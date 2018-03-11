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
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Verb</th>
              <th>Present</th>
              <th>Past</th>
              <th>Perfect</th>
              <th>Meaning PL</th>
            </tr>
          </thead>
          <SelectedVerbs />
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    verbs: state.verbs,
    active: state.active_verbs
  };
}

export default connect(mapStateToProps, { fetchVerbs })(Word);
