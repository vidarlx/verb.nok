import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVerbs } from '../actions';

class Word extends Component {
  constructor(props) {
    super(props);

    this.renderVerbs = this.renderVerbs.bind(this);
    this.getActiveVerbsDetails = this.getActiveVerbsDetails.bind(this);
  }

  componentDidMount() {
    this.props.fetchVerbs();
  }

  getActiveVerbsDetails() {
    const activeVerbs = this.props.active;
    const allVerbs = this.props.verbs;
    if (!Object.keys(activeVerbs).length) {
      return [];
    }

    return activeVerbs.map((verb) => {
      return { verb, ...allVerbs[verb] };
    });
  }

  renderVerbs() {
    if (!Object.keys(this.props.active).length) {
      return <tr></tr>
    }

    const activeVerbsDetails = this.getActiveVerbsDetails();
    return activeVerbsDetails.map((verb) => {
      return (
        <tr key={verb.verb}>
          <td>{verb.verb}</td>
          <td>{verb.present}</td>
          <td>{verb.past}</td>
          <td>{verb.perfect}</td>
          <td>{verb.meaning_pl}</td>
        </tr>
      )
    });
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
          <tbody>
            {this.renderVerbs()}
          </tbody>
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
