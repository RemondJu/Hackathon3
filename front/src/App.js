import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import MyHome from './components/MyHome';
import Navigation from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/myHome" component={MyHome} />
        </Switch>
      </div>
    );
  }
}

export default App;
