import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import Content from './components/Content';
// import Login from './components/nav/Login';
// import Register from './components/nav/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Am I Dying?</h1>
        {/* <Router>
            <div>
              <Content/>>
              <Route exact path = '/Login' component={Login}/>
              <Route exact path = '/Register' component={Register}/>
            </div>
        </Router> */}
        <Content/>

      </div>
    );
  }
}

export default App;
