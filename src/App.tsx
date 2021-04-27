import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import './scss/style.scss'
import { Details } from './components/details/details'
import {Header} from "./components/header/Header";
import {Releases} from "./components/newRelease/NewRelease";
import {Result} from "./components/result/Result";
import {Watchlist} from "./components/watchlist/Watchlist"
import {Trending} from "./components/trending/Trending";
import {Rated} from "./components/topRated/Rated";

function App() {
  return (
      <div className="app">
              <Header />
              <div className="app__content">
                  <Route exact path="/">
                      <Redirect to="/main" />
                  </Route>
                  <Route path='/main/:page?' render={() => <Releases/>}/>
                  <Route path='/trending' render={() => <Trending />}/>
                  <Route path='/rated' render={() => <Rated />}/>
                  <Route path='/details/:id?' render={() => <Details /> }/>
                  <Route path='/result/' render={() => <Result /> }/>
                  <Route path='/watchlist/' render={() => <Watchlist /> }/>
              </div>

      </div>

  );
}

export default App;
