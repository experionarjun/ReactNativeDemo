import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
      </View>
    )
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
   }

 });
