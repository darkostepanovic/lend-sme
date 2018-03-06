import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './Header';
import CurrentStep from './CurrentStep';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/:step" component={CurrentStep} />
                    <Redirect from='' to='/1'/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
