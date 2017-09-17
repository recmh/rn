import React from 'react';
import {NativeModules, DeviceEventEmitter, Platform} from 'react-native';
import checker from '../util/checker';

import {off,on} from './event';

let count = 0;

export function naviBack(callback) {
  //导航栏返回事件
  const error = checker(arguments, ['f'], 'naviback');

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  if(count == 1){
    off('back.__default__')
  }

  count++;

  return DeviceEventEmitter.addListener('prepare_finish_page', () => {
    // 不传callback默认退出
    if (callback == 'undefied') {
      NativeModules.WBFinishPage.finish();
      return;
    }

    // return 值为假值(undefined)才退出，否则不退出
    if (!callback()) {
      NativeModules.WBFinishPage.finish();
    }
  });
}

let goBackHandle = function () {
  NativeModules.WBFinishPage.finish();
};


const listener = DeviceEventEmitter.addListener('prepare_finish_page', () => {

  if (typeof goBackHandle == 'function') {
    goBackHandle();
  }
});


//小区选择参数校验
export function goBack() {
  setTimeout(() => {
    NativeModules.WBFinishPage.finish();
  }, 0)
  listener.remove();
}


export function setHandle(callback) {
  goBackHandle = callback;
}

export function getHandle() {
  return goBackHandle;
}

export function removeHandle() {
  goBackHandle = undefined
}


export const back = {
  goBack,
  setHandle,
  getHandle,
  removeHandle,
};