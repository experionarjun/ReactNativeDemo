import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../components/login/login';
import Home from '../components/home/home';



export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login"  component={Login} initial={true} hideNavBar={true}/>
            <Scene key="home"  component={Home} title="Home" hideNavBar={false}/>
        </Scene>
      </Router>
    )
  }
}
