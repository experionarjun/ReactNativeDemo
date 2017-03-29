import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  postContainer: {
    flex: 1,
    margin:5,
    flexDirection: 'row',
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
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
   flex: 1,
   marginLeft:10
 },
 title: {
    fontSize: 10,
    paddingTop:5,
    marginBottom: 8,
    textAlign: 'left',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    borderLeft: 4,
    borderBottomColor: '#333',
  }
});

export default styles;
