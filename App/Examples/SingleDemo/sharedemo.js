import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class ShareDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const shareParam = {
      title: '标题',
      url: 'http://www.58.com',
      picUrl: 'http://img.58cdn.com.cn/logo/m58/40_40/logo.png',
      placeholder: '微博分享时默认的一句话',
      content: '分享文本内容',
      shareto: 'FRIENDS,WEIXIN,QQ,SINA', // 注意：shareto、extshareto 写成一样的   单一渠道分享，目前安卓支持QQ，SINA，FRIENDS(朋友圈)，WEIXIN四种（和extshareto二选一必传）
      extshareto: 'FRIENDS,WEIXIN,QQ,SINA', // 注意：shareto、extshareto 写成一样的   多渠道分享，渠道以‘,’间隔。例如“QQ,SINA,FRIENDS”（和shareto二选一必传）
    };

    WBAPP.share(shareParam, function(result) {
      // TODO
      let params = { title: '结果', message: result, btn: '确认' };
      WBAPP.alert(params);
    });
  }

  handleWClick() {
    const shareParam = {
      title: '标题',
      url: 'http://www.58.com',
      picUrl: 'http://img.58cdn.com.cn/logo/m58/40_40/logo.png',
      placeholder: '微博分享时默认的一句话',
      content: '分享文本内容',
      shareto: 'WEIXIN',
      extshareto: 'WEIXIN',
    };

    WBAPP.share(shareParam, function(result) {
      // TODO
      let params = { title: '结果', message: result, btn: '确认' };
      WBAPP.alert(params);
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClick}>
          <View style={styles.box}>
            <Text style={styles.button}>点击分享所有</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleWClick}>
          <View style={styles.box}>
            <Text style={styles.button}>点击分享WEIXIN</Text>
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
