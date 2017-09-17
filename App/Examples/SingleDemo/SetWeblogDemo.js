import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class SetWeblogDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    //paramsArray必是字符串数组
    WBAPP.setWebLog({
      pagetype: 'rndemo',
      actiontype: 'test',
      cate: '5',
      paramsArray: ['1', '2'],
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClick}>
          <View style={styles.box}>
            <Text style={styles.button}>点击埋点，观察的话，请看打开埋点开关观看</Text>
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
