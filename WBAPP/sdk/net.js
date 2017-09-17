import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';


export function request({url,header,method,params},callback) {

  //loading参数校验
  const error = checker(arguments,
      [{url:'s', header: "s",  method:"s", params: "s"},"f"],
      'request'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  NativeModules.WBNetwork.request(url,header,method,params,callback);
}
