import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVerbs } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { word: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ word: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // search inside this.props.verbs

    this.setState({
      word: ''
    });
  }

  componentDidMount() {
    this.props.fetchVerbs();
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Type a word to search"
          className="form-control"
          value={this.state.word}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

function mapStateToProps({ verbs }) {
  return { verbs };
}

export default connect(mapStateToProps, { fetchVerbs })(Search);
