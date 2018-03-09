import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Navigator,
  Text
} from 'react-native';

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

module.exports = DummyPage;
