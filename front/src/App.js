import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import MyRooms from './containers/MyRooms';
import MyHome from './components/MyHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
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
