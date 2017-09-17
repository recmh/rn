import React from 'react';
import {NativeModules, Platform,ToastAndroid} from 'react-native';

import checker from '../util/checker';


export function toast({message="",time=2}) {

  const error = checker(arguments,[{message:"s",time:"n"}],'toast');

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  if(Platform.OS == 'android'){
    time = time >=3? 1: 0;
  }

  NativeModules.WBToast.show(message,time);

}
