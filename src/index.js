import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import Search from './containers/search';
import VerbShow from './components/verb_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Link to="/"><img src="../assets/logo.png" className="logo" /></Link>
        <Search />
        <Switch>
          <Route path="/czasownik/:id" component={VerbShow} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));