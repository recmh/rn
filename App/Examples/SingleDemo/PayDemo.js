import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';

import WBAPP from '../../../WBAPP';

export default class PayDemo extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const payParam = {
      productName: '商品名称',
      productDesc: '上平描述',
      orderMoney: '5.00',
      merId: '1162',
      orderId: '26212746462784',
      notifyUrl: 'http://post.58.com/repo/payment/paysuccess/backendcallback',
      returnUrl:
        'http://post.58.com/repo/payment/paysuccess/frontendcallback/26212746462784',
    };

    WBAPP.gotoPay(payParam, function(result) {
      // TODO
      alert(JSON.stringify(result));
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight activeOpacity={1} onPress={this.handleClick}>
          <View style={styles.box}>
            <Text style={styles.button}>点击Pay</Text>
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
