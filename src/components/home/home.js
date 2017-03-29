import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  ActivityIndicator,
  Text,
  Image,
  View,
  ListView
} from 'react-native';

import styles from '../../utils/styles'
import {getAPI} from '../../utils/api'

const url='https://www.reddit.com/r/movies/top.json?limit=20'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Home extends Component {

  constructor(props){
    super(props);

     this.state = {
        dataSource: null,
        loaded: false
      };
  }

  componentDidMount(){
    getAPI(url).then((res) => {
      this.setState({
        dataSource:ds.cloneWithRows(res.data.data.children),
        loaded:true
      })
    }).catch((e) => {
        console.log(e);
    })
  }

  render() {
    if (!this.state.loaded) {
     return this.renderLoadingView();
   }
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPost}
          style={styles.listView}
        />
      </View>
    )
  }

  renderLoadingView(){
    return(
      <View style={styles.centreContainer}>
        <ActivityIndicator
        animating={!this.state.loaded}
        style={{height: 100}}
        size="large"
      />
      </View>
    )
  }

  renderPost(post){
    return(
      <View style={styles.postContainer}>
        <Image
          source={{uri:post.data.thumbnail}}
          style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{post.data.title}</Text>
          </View>
      </View>
    )
  }

 }
