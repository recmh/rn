import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class RequestAndroidDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    var params = {
      url: 'http://apptest.58.com/api/base/hotupdate/resourcelist',
      header: '',
      method: 'POST',
      params:
        '[{"os":"android"},{"commver":"0"},{"listver":"0"},{"appversion":"7.8.3"}]',
    };

    WBAPP.requestAndroid(params, result => {
      // TODO
      alert(result);
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClick}>
          <View style={styles.box}>
            <Text style={styles.button}>点击发送请求 (Only Android)</Text>
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
