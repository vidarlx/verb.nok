import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { withRouter } from 'react-router'

import { findVerb, clearVerbs } from '../actions';
import { RANDOM_VERB } from '../common/consts';

const getSuggestionValue = suggestion => suggestion.norsk_verb;

const renderSuggestion = suggestion => (
  <div className="suggestions-list">
    {suggestion.norsk_verb} (<span className="suggestion-pl">{suggestion.polsk_verb}</span>)
  </div>
);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search_word: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.findRandom = this.findRandom.bind(this);
    this.clearVerbs = this.clearVerbs.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);

    this.state = {
      value: '',
      suggestions: [],
      navigateToHomepage: false
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionSelected = (event, { suggestionValue }) => {
    const { findVerb, history } = this.props;
    findVerb(suggestionValue);

    this.setState({
      value: ''
    });

    history.push('/');
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = value => {
    const { verbs } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength < 2 ? [] : verbs.filter(verb =>
      verb.norsk_verb.toLowerCase().slice(0, inputLength) === inputValue ||
      verb.polsk_verb.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  findRandom() {
    this.props.findVerb(RANDOM_VERB);
  }

  clearVerbs() {
    this.props.clearVerbs();
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { value, suggestions, navigateToHomepage } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Søk på norske eller polske verb',
      value,
      onChange: this.onChange
    };

    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <Autosuggest className="form-control"
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
      </form>
    )
  }

}

function mapStateToProps(state) {
  const v = state.verbs.all;
  // translate to array
  const verbs = Object.keys(v).map((key) => {
    return v[key]
  });

  return {
    verbs
  };
}

export default connect(mapStateToProps, { findVerb, clearVerbs })(withRouter(Search));
