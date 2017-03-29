import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  View,
  ListView
} from 'react-native';

import styles from '../../utils/styles'
import {getAPI} from '../../utils/api'

const url='https://www.reddit.com/r/movies/top.json?limit=5'


export default class Home extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
        dataSource: ds.cloneWithRows([
          {title:"test"},
          {title:'test2'}
        ])
      };

    getAPI(url).then(function(response){
      let posts = response.data.data.children;
      console.log(posts);
      this.state.dataSource = ds.cloneWithRows(posts)
    })
   
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text> 
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}
        />
      </View>
    )
  }
 }

