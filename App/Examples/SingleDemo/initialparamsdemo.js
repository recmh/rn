import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class InitialParamsDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(data) {
    WBAPP.initialParams(data, result => {
      // TODO
      alert(JSON.stringify(result));
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          activeOpacity={1}
          onPress={() => this.handleClick('WB_JUMPER|WB_HTTP_HEAD')}
        >
          <View style={styles.box}>
            <Text style={styles.button}>获取初始化数据HTTP_HEAD|JUMPER</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight
          activeOpacity={1}
          onPress={() => this.handleClick('WB_HTTP_HEAD')}
        >
          <View style={styles.box}>
            <Text style={styles.button}>获取初始化数据WB_HTTP_HEAD</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight
          activeOpacity={1}
          onPress={() => this.handleClick('WB_JUMPER')}
        >
          <View style={styles.box}>
            <Text style={styles.button}>获取初始化数据WB_JUMPER</Text>
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
