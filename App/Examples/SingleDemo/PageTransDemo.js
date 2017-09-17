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
    WBAPP.loadPage({
      pagetype: 'link',
      title: '金币商城',
      url: 'https://pmall.58.com/pointsMall/mall',
    });
  }

  handleClickB() {
    const param = {
      content: {
        pagetype: 'RN', //必填
        bundleid: '8', //RN资源唯一标示符  必填 seedproject
        title: 'RN页面', //必填
        url: 'https://www.58.com', //Android使用兼容老协议，必填 不支持RN的安卓手机跳转该url
        backtoroot: false, //兼容Android4.0，必填
        isfinish: true, //非必填，默认为false。如果为true，则跳转后销毁当前页面，返回时返回到当前页面的父页面。
        //  'params':{ //具体业务扩展参数，下面列的是发布页面所需的参数，发布必填
        //        'pagestate':'create/edit/draft',//页面状态，包括发布状态/编辑状态/草稿状态三种状态，发布必填
        //        'infoid':'' //具体帖子id，在pagestate的值等于edit（编辑状态）情况下 发布必填
        //        'cateid':'',//类别id，发布必填
        //        'catename':'',//类别名称，发布必填
        //        'needlogin': false,//是否需要登录，默认为false；发布必填，需设置为true
        //        'type':'',//表示第三级类别，比如二手房里面的求租或者出售，发布选填
        //        'tradeid':''//用于区分进入RN页面后具体的业务，已上线的房产无需配置，后续其他业务必须有这个字段。目前只有安卓用到这个值。
        //   }
      },
    };
    WBAPP.loadReactNative(param);
  }

  handleClickC() {
    // 参考web协议
    const param = {
      tradeline: 'core',
      action: 'pagetrans',
      content: {
        title: '同城头条',
        action: 'loadpage',
        backtoroot: 'true',
        pagetype: 'link',
        url:
          'https://news.58.com/infolist/?cityid=1&id=7765267&utm_source=head-news&utm_medium=head-news-l&utm_campaign=daily-20170720',
      },
    };
    WBAPP.navigator(param);
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>跳转58</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>跳转RN bundleid 为8</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickC}>
          <View style={styles.box}>
            <Text style={styles.button}>跳转同城头条</Text>
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
