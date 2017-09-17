/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {CountingTextInput} from '../../../WBAPP';

const styles = {
  container: {
    marginTop: 30,
    justifyContent: 'center',
  },
  wrapper: {
    marginLeft:10,
    marginRight:10,
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
};

export default class CountingTextInputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '58同城从属于北京五八信息技术有限公司，成立于2005年12月，姚劲波现任企业总裁及CEO。 ',
      text2: '58同城从属于北京五八信息技术有限公司，成立于2005年12月，姚劲波现任企业总裁及CEO。经过十一年发展，58同城已经发展成为覆盖全领域的生活服务平台，业务覆盖招聘、房产、汽车、金融、二手及生活服务等各个领域。截止目前，58同城在全国范围内共设立27家分公司，并在400个城市建立网络平台。'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native 限制字数本文输入框</Text>
        <View style={styles.wrapper}>
          <CountingTextInput limitCount={100} height={70} placeholder='请填写200字以内的内容' onChangeText={() => {
          }} value={this.state.text1}/>
        </View>
        <Text>1</Text>
        <View style={styles.wrapper}>
          <CountingTextInput placeholderTextColor={'#ffb3ac'} limitCount={200} height={140} placeholder='请填写200字以内的内容' borderStyle={{borderWidth: 0.5, borderColor: '#FF552E', borderRadius: 3}} value={this.state.text2} onChangeText={(text) => {
                               console.log('outer:',text);
                             }}/>
        </View>
      </View>
    );
  }

  button1Handler = () => {

  };

  button2Handler = () => {

  };
}
