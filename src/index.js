import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import Search from './containers/search';
import Footer from './components/footer';
import VerbShow from './components/verb_show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div id="main" className="container clear-top">
        <Link to="/"><img src="../assets/logo2.png" className="logo" /></Link>
        <Search />
        <Switch>
          <Route path="/czasownik/:id" component={VerbShow} />
          <Route path="/" component={App} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#wrap'));