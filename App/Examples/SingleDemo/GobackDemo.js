import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

function backFn() {
  WBAPP.alert({ message: '监听并已，已阻止默认的退出事件' });
}

export default class GobackDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClickA() {
    WBAPP.goBack();
  }

  handleClickB() {
    // 监听并已，已阻止默认的退出事件
    WBAPP.back.setHandle(backFn);
    WBAPP.alert('监听，并阻止默认的退出事件');
  }

  handleClickC() {
    const fn = WBAPP.back.getHandle();
    WBAPP.alert({ message: fn + '' });
  }

  handleClickD() {
    WBAPP.back.removeHandle();
    WBAPP.alert('删除监听事件');
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>回退</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>监听，并阻止默认的退出事件</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickC}>
          <View style={styles.box}>
            <Text style={styles.button}>获取当前的退出监听事件</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickD}>
          <View style={styles.box}>
            <Text style={styles.button}>删除监听事件</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

function marginAdapt() {
  const top = Platform.OS === 'ios' ? 17 : 0;
  return top;
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    backgroundColor: '#f3f3f3',
  },
  space: {
    height: 3,
    backgroundColor: '#ffffff',
  },
  button: {
    height: 50,
    fontSize: 16,
    textAlignVertical: 'center',
    marginTop: marginAdapt(),
  },
});
