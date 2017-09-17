import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';
var UserInfo = NativeModules.WBUserInfo;

export function userinfo(callback) {

  //loading参数校验
  const error = checker(arguments,
    ["f"],
    'userinfo'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  UserInfo.getUserInfo(callback);
}
