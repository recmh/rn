import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { CheckBoxButton } from '../../../WBAPP';

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
  },
};

export default class CheckBoxButtonDemo extends Component {
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
        <Text style={styles.welcome}>复选框按钮</Text>
        <CheckBoxButton
          titleLines={1}
          title={'销售代表'}
          value={'xsdb'}
          titleNormalStyle={{ fontSize: 20, color: 'gray' }}
          titleCheckStyle={{ fontSize: 20, color: 'blue' }}
          bgNormalStyle={{
            width: 143,
            height: 53,
            borderRadius: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F7F7',
          }}
          bgCheckStyle={{
            width: 143,
            height: 53,
            borderRadius: 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D1EAFF',
          }}
          checked={this.state.checkBoxButton1}
          onPress={this.checkBoxButton1Handler}
        />
        <Text>1</Text>
        <CheckBoxButton
          ref="ckb2"
          title={'销售经理主管与总监'}
          value={'xsjlzgyzj'}
          checked={this.state.checkBoxButton2}
          onPress={this.checkBoxButton2Handler}
        />
      </View>
    );
  }

  checkBoxButton1Handler = () => {
    this.setState({ checkBoxButton1: !this.state.checkBoxButton1 });
  };

  checkBoxButton2Handler = () => {
    if (this.refs.ckb2 && !this.refs.ckb2.props.checked) {
      console.debug(this.refs.ckb2.props.value);
    }
    this.setState({ checkBoxButton2: !this.state.checkBoxButton2 });
  };
}
