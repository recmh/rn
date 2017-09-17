import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class LoadingDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClickA() {
    // 展现传入参数
    let param = {
      cmd: 'show',
      type: 'block',
    };
    // 先cmd ＝ show 展现加载动画
    WBAPP.loading(param);

    // 然后通过 cmd ＝ hide 隐藏起来
    let c = setTimeout(() => {
      WBAPP.loading({
        cmd: 'hide',
        type: 'block',
      });
    }, 1000);
  }

  handleClickB() {
    // 展现传入参数
    let param = {
      cmd: 'show',
      type: 'nonblock',
    };
    // 先cmd ＝ show 展现加载动画
    WBAPP.loading(param);

    // 然后通过 cmd ＝ hide 隐藏起来
    let c = setTimeout(() => {
      WBAPP.loading({
        cmd: 'hide',
        type: 'nonblock',
      });
    }, 1000);
  }

  handleClickC() {
    // 展现传入参数
    let param = {
      cmd: 'show',
      type: 'nonblock',
      height: 400,
    };
    // 先cmd ＝ show 展现加载动画
    WBAPP.loading(param);

    // 然后通过 cmd ＝ hide 隐藏起来
    let c = setTimeout(() => {
      WBAPP.loading({
        cmd: 'hide',
        type: 'nonblock',
      });
    }, 1000);
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>Loading block</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>Loading nonblock</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickC}>
          <View style={styles.box}>
            <Text style={styles.button}>
              IOS Loading nonblock with Height 400
            </Text>
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
