
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AllMonsters from '../monsters/AllMonsters.jsx';
import MonsterDetails from '../monsters/MonsterDetails.jsx';

export default class App extends Component {


  render() {
    return (

      <div className="App">
        <Router>

          <Switch>
            <Route
              exact path="/"
              render={(routerProps) => <AllMonsters {...routerProps} />}
            />
            <Route
              exact path="/details/:id"
              render={(routerProps) => <MonsterDetails {...routerProps} />}
            />

          </Switch>
        </Router>
      </div>
    );
  }
}
