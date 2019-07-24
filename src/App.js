import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './containers/Register';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
