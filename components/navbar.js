import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const routeMapper = {
  Title: function(route, navigator, index, navState) {
    return (
      <Text style={{fontSize: 25}}>
      {route.title}
      </Text>
      );
  }
}

export default class navbar extends Component {

  render() {
    return (
      <Navigator.NavigationBar
      routeMapper={this.routeMapper}
      style={styles.navBar}
      />
      );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});