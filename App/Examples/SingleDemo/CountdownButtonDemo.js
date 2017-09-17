import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { CountdownButton } from '../../../WBAPP';

const styles = {
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'orange',
    flex: 1,
    height: 35,
    paddingLeft: 3,
  },
  button: {
    width: 90,
    height: 35,
    backgroundColor: 'orange',
  },
};

export default class CountdownButtonDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '13800138000',
    };
  }

  _requestSMSCode = shouldStartCounting => {
    shouldStartCounting(true);
  };

  render() {
    const { phoneNumber } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={'手机号码'}
          maxLength={11}
          keyboardType={'numeric'}
          onChangeText={phoneNumber => this.setState({ phoneNumber })}
          value={phoneNumber}
          underlineColorAndroid="transparent"
        />

        <CountdownButton
          timerCount={6}
          style={styles.button}
          textStyle={{ color: 'white' }}
          timerTitle={'发送验证码'}
          enable={phoneNumber.length > 10}
          onClick={this._requestSMSCode}
        />
      </View>
    );
  }
}
