import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {getAPI} from '../../utils/api'


import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import styles from '../../utils/styles.js'

// const url = '../../assets/login.json'
// const url = 'https://exptest.herokuapp.com/api/login'; <---INPUT = userName= demo@experionglobal.com& password= exp@123

export default class Login extends Component {
  constructor(props) {
   super(props);
   this.state = { username: 'Name',
                  password:'Password'};
 }

login(usr,pass){
  //====================API=====================
    // getAPI(url).then((data)=>{
    //   console.log('res',data)
    // });
//================================================
    if(usr == 'arjun' && pass == 'l00p123'){
        Actions.home();
      }else{
        Alert.alert('Invalid');
      }
}

  render() {
    return (
      <View style={styles.centreContainer}>
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
