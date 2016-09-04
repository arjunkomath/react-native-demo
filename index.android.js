/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  AppRegistry,
  Navigator
} from 'react-native';

import Main from './components/main'

class movies extends Component {

  renderScene(route, navigator) {
    if(route.id === 'MAIN')
      return <Main navigator={navigator} />;
  }

  render() {
    return (
      <Navigator style={{ flex:1 }}
        initialRoute={{ id: 'MAIN', title: 'Search Movies'}}
        renderScene={this.renderScene}
      />
      );
  }
}

AppRegistry.registerComponent('movies', () => movies);
