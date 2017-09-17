import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class DialogDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClickA() {
    // 参数
    let params = { title: '提示', message: '1111', btn: '按钮名称' };

    // 回调函数调用
    WBAPP.alert(params, e => alert(e));

    // 返回值
    // 点击按钮返回 "1"
  }

  handleClickB() {
    // 参数
    const params = {
      title: '提示',
      message: '是否确认上传文件?',
      cancelBtn: '取消',
      confirmBtn: '确定',
    };
    // 回调函数调用
    WBAPP.confirm(params, e => alert(e));

    // 返回值
    // 点击confirmBtn按钮返回"1"； 点击cancelBtn返回"0"
  }

  handleClickC() {
    // 参数
    const params = {
      title: '提示',
      content: '是否确认上传文件?',
      negativeButtonTxt: '取消',
      positiveButtonTxt: '确定',
    };

    WBAPP.dialogPic.show(params, e => {
      WBAPP.dialogPic.dismiss();
      alert(e);
    });
    // 点击positiveButtonTxt按钮返回"1"； 点击negativeButtonTxt返回"0"
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>一个按钮的Dialog [alert]</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>两个按钮的Dialog [confirm]</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickC}>
          <View style={styles.box}>
            <Text style={styles.button}>标题栏带图片的Dialog [dialogPic]</Text>
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
