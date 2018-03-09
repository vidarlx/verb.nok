
import React, { Component } from 'react';
import Word from '../containers/word';
import Search from '../containers/search';

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Word />  
      </div>
    );
  }
}
