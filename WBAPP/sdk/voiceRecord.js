import React from 'react';
import {NativeModules, Platform, NativeAppEventEmitter,DeviceEventEmitter} from 'react-native';
import checker from '../util/checker'

let lastCallback, subscription;

export const voiceRecord = {
  show(callback) {

    const error = checker(
      arguments,
      ['f'],
      'voiceRecord'
    );

    // 线上环境报错不调起 Native 的 API
    if(error === 'error'){
      return error
    }



    // 如果是不同回调，先取消上次订阅，再重新注册。
    if (callback !== lastCallback) {
      lastCallback = callback;
      subscription && subscription.remove();

      subscription = DeviceEventEmitter.addListener('voice_record_event', (e)=>{
        // 返回数据给业务层
        if(Platform.OS === 'android'){
          e = JSON.parse(e);
        }
        callback(e);
      });
    }

    NativeModules.WBVoiceRecordViewManager.show();
  },
  dismiss(){
    NativeModules.WBVoiceRecordViewManager.dismiss();
  },
};
