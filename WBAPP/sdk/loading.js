import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';


export function loading(param) {

  //loading参数校验
  const error = checker(arguments,
    [
      {"cmd":'s', "type":"s"},
    ],
    'loadingBar'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  NativeModules.WBLoadingBar.execute(param);
}
