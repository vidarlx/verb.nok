import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findVerb, clearVerbs } from '../actions';
import { RANDOM_VERB } from '../common/consts';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search_word: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.findRandom = this.findRandom.bind(this);
    this.clearVerbs = this.clearVerbs.bind(this);
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

  findRandom(){
    this.props.findVerb(RANDOM_VERB);
  }

  clearVerbs() {
    this.props.clearVerbs();
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
          <button 
            className="btn btn-success"
            onClick={this.findRandom}
          >Random</button>
          <button 
            className="btn btn-default"
            onClick={this.clearVerbs}
          >Clear</button>
        </span>
      </form>
    )
  }
}

export default connect(null, { findVerb, clearVerbs })(Search);
