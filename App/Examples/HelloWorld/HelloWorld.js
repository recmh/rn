import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>欢迎来到 WubaRN 的世界！</Text>
        <Text style={styles.instructions}>可以通过编辑 App/app.js 来查看不同的 demo。</Text>
        <Text style={styles.instructions}>摇一摇，可打开开发者菜单，点击 reload ，重新加载页面。</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
