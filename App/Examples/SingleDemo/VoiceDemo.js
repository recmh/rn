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

  handleClickA() {
    WBAPP.voiceRecord.show(result => {
      alert(JSON.stringify(result));
    });
  }

  handleClickB() {
    WBAPP.voiceRecord.dismiss();
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickA}>
          <View style={styles.box}>
            <Text style={styles.button}>点击录音</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.space} />
        <TouchableHighlight activeOpacity={1} onPress={this.handleClickB}>
          <View style={styles.box}>
            <Text style={styles.button}>取消录音</Text>
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
