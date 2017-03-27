/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator,
  Button
} from 'react-native';

import Home from './App/Home.js'

export default class ReactDemo extends Component {
  constructor(props) {
   super(props);
   this.state = { username: 'Name',
                  password:'Password'};
 }
  login(usr,pass){
    if(usr == 'arjun' && pass == 'l00p123'){
      // Alert.alert('Successful')
      Navigator.push(Home);
    }else{
      Alert.alert('Invalid');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login!
        </Text>
        <TextInput
        style={styles.textbox}
        onChangeText={(username) => this.setState({username})}
        placeholder={this.state.username}
      />
      <TextInput
        style={styles.textbox}
        onChangeText={(password) => this.setState({password})}
        placeholder={this.state.password}
        secureTextEntry = {true}
      />
      <Button
        onPress = {() => this.login(this.state.username,this.state.password)}
        title="Submit"

      />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textbox: {
    height: 40,
    width: 300,
  },
});

AppRegistry.registerComponent('ReactDemo', () => ReactDemo);