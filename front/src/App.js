import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import MyHome from './components/MyHome';
import MyRooms from './containers/MyRooms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/myHome" component={MyHome} />
          <Route path="/myRooms" component={MyRooms} />
        </Switch>
      </div>
    );
  }
}

export default App;
