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
              <th>Norsk verb</th>
              <th>Presens</th>
              <th>Preteritum</th>
              <th>Perfektum</th>
              <th>Polsk grunnform</th>
            </tr>
          </thead>
          <SelectedVerbs />
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    verbs: state.all,
    active: state.active
  };
}

export default connect(mapStateToProps, { fetchVerbs })(Word);
