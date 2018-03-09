import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findVerb } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search_word: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ search_word: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const searchWord = this.state.search_word;

    this.props.findVerb(searchWord);

    this.setState({
      search_word: ''
    });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Type a word to search"
          className="form-control"
          value={this.state.search_word}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

export default connect(null, { findVerb })(Search);
