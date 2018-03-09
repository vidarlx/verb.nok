import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVerbs } from '../actions';

class Word extends Component {
  constructor(props) {
    super(props);

    this.fetchWord = this.fetchWord.bind(this);
  }

  componentDidMount() {
    this.props.fetchVerbs();
  }

  fetchWord() {
    const { verbs } = this.props;
    const current = verbs['_current'];
    return {
      verb: verbs[current] || false,
      key: current
    }
  }

  render() {
    const found = this.fetchWord();

    return (
      <div>
        <h2>{found.key}</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Present</th>
              <th>Past</th>
              <th>Perfect</th>
              <th>Meaning PL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{found.verb.present}</td>
              <td>{found.verb.past}</td>
              <td>{found.verb.perfect}</td>
              <td>{found.verb.meaning_pl}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ verbs }) {
  return { verbs };
}

export default connect(mapStateToProps, { fetchVerbs })(Word);
