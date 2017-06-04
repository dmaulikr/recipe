/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/common/header'

export default class recipe extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}

AppRegistry.registerComponent('recipe', () => recipe);
