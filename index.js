import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  StyleSheet,
  ScrollView,
  NativeModules
} from 'react-native';

var RNDeviceInfo = NativeModules.RNDemo;

class DummyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{width: 200, height: 250, backgroundColor: 'blue'}}></View>
    );
  }

}

module.exports = {
  DummyPage,
  RNDeviceInfo
}
