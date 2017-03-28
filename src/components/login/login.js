import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {getAPI} from '../../utils/api.service'


import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

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
