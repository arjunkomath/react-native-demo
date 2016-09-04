import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  TextInput,
} from 'react-native';

import {debounce} from 'lodash';
import ListItem from './listItem';

export default class main extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies = debounce( text => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows([])
    })
    fetch('http://www.omdbapi.com/?s=' + text)
    .then((response) => response.json())
    .then((responseData) => {
      if('Search' in responseData) {
        this.setState({
          dataSource: ds.cloneWithRows(responseData.Search)
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, 500);

  renderRow(row, sId, rId) {
    return (<ListItem row={row} delay={rId * 50} />)
  }

  render() {
    return (
      <View style={styles.container}>

      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={this.searchMovies}
      placeholder="Enter search keyword"
      />

      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      />
      </View>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 25
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  poster: {
    height: 75,
    width: 50
  },
  title: {
    margin: 5,
    fontSize: 15
  },
  subHeading: {
    margin: 5,
    fontSize: 12
  }
});