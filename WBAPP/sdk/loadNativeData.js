import React from 'react';
import {NativeModules, DeviceEventEmitter, Platform} from 'react-native';
import checker from '../util/checker';


export function loadNativeData(key,callback) {
  //埋点参数校验
  const error = checker(arguments,
    [
      's'
    ],
    'loadNativeData'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  NativeModules.WBLoadData && NativeModules.WBLoadData.loadNativeData(key,callback);

}