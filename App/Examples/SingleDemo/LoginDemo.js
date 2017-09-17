import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class LoginDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClickA() {
    WBAPP.login(code => {
      let params = { title: '查看', message: JSON.stringify(code), btn: '确认' };
      // alert(JSON.stringify(code));
      WBAPP.alert(params);
      // setTimeout(()=>{alert(JSON.stringify(code))},100)
    });
  }

  handleClickB() {
    WBAPP.login();
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>点击登陆，有回调 >=7.13版本有效</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>点击登陆，没有回调</Text>
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
