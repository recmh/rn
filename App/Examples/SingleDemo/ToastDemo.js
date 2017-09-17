import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class ToastDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClickA() {
    WBAPP.toast({ message: '提示信息', time: 2 });
  }

  handleClickB() {
    WBAPP.toast({ message: '提示信息', time: 3.5 });
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>Toast 2s</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>Toast 3.5s</Text>
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
