import React from 'react';
import {NativeModules, Platform, NativeAppEventEmitter} from 'react-native';
import checker from '../util/checker'

// 该接口后续不再维护，请使用 initialParams
export function headInfo(callback = ()=> {}) {

  const error = checker(
    arguments,
    ['f'],
    'voiceRecord'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  NativeModules.WBHttpClientHeader.commonHeader(callback);

}
