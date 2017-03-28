import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
//components
import Login from './components/login/login';
import Home from './components/home/home';

const routes = Actions.create(
  <Scene key='root' hideNavBar={true}>
    <Scene key="login"  component={Login} initial={true} />
    <Scene key="home"  component={Home} title="Home" />
  </Scene>
);

export default class Routes extends Component {
  render() {
    return (
      <Router scenes={routes} >
      </Router>
    )
  }
}
