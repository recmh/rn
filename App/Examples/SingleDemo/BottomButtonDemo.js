/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BottomButton } from '../../../WBAPP';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
};

export default class BottomButtonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxButton1: false,
      checkBoxButton2: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native BottomButton!
        </Text>
        <BottomButton
          infoLeftText={'最近  '}
          infoCenterText={'15'}
          infoRightText={'  套新上房子'}
          btnTitle={'立即订阅'}
          onPress={this.button1Handler}
        />
        <Text>1</Text>
        <BottomButton
          infoLeftText={'最近'}
          infoCenterText={' 715 '}
          infoRightText={'辆新上汽车'}
          btnTitle={'立即联系'}
          infoTextNormalStyle={{ color: '#666', fontSize: 22 }}
          infoTextHighlightStyle={{ color: '#50c8ff', fontSize: 32 }}
          infoWrapperStyle={{
            flexDirection: 'row',
            backgroundColor: '#FFF',
            alignItems: 'center',
            paddingLeft: 25,
            flex: 2,
          }}
          btnWrapperStyle={{
            backgroundColor: '#50c8ff',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
          onPress={this.button2Handler}
        />
      </View>
    );
  }

  button1Handler = () => {};

  button2Handler = () => {};
}
