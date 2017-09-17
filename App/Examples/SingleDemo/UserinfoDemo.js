import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class UserinfoDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    WBAPP.userinfo(function(result) {
      // 返回用户相关信息
      // TODO
      alert(JSON.stringify(result));
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClick}>
          <View style={styles.box}>
            <Text style={styles.button}>用户信息</Text>
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
