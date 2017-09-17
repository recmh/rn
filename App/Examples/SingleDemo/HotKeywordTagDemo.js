/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {HotKeywordTag} from '../../../WBAPP';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
};

export default class BottomButtonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxButton1: false,
      checkBoxButton2: true,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native 热门搜索词</Text>
        <HotKeywordTag title={'空调维修'} />
        <Text>1</Text>
        <HotKeywordTag title={'小货车'} showBorder={true} highlightText={true} onPress={this.button1Handler} />
        <Text>1</Text>
        <HotKeywordTag label={'推荐'} activeOpacity={0.8} title={'毛坯房出租'} showBorder={true} highlightText={true} />
        <Text>1</Text>
        <HotKeywordTag title={'皮卡二手车'} activeOpacity={0.6} highlightText={true} onPress={this.button1Handler}/>
        <Text>1</Text>
        <HotKeywordTag title={'空调维修'} activeOpacity={0.3} titleStyle={{ color: '#999',fontSize:12}} />
        <Text>1</Text>
        <HotKeywordTag title={'小货车'} highlightColor={'#92caff'} showBorder={true} onPress={this.button1Handler} />
        <Text>1</Text>
        <HotKeywordTag label={'推荐'} title={'毛坯房出租'} showBorder={true} highlightColor={'#92caff'} />
        <Text>1</Text>
        <HotKeywordTag title={'皮卡二手车'} highlightColor={'#92caff'} onPress={this.button2Handler}/>
      </View>
    );
  }

  button1Handler = () => {

  };

  button2Handler = () => {

  };
}
