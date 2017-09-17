import React from 'react';
import {DeviceEventEmitter,NativeModules, Platform} from 'react-native';
import checker from '../util/checker';
import {loadReactNative} from './navigator';

const viewController = NativeModules.WBRCTCarrierViewController;
const EmittedEvents = {};

function push({deviceEventName, action, callback}) {

  const error = checker(
    arguments,
    [{deviceEventName:'s', action:'o',callback:'f'}],
    'viewController.push'
  )

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  if(Platform.OS === 'android'){
    action = JSON.stringify(action);
  }

  // 1. 注册回调。当 A -> B -> C 依次调用时。 B 页面不传入 callback 时，不注册。第二次点击，已注册的，不注册。
  if(callback && !EmittedEvents[deviceEventName]){
    EmittedEvents[deviceEventName] = DeviceEventEmitter.addListener(deviceEventName, callback);
  }

  // 2. 发送事件名给 Native && 发送跳转协议(Android)
  viewController.addDeviceEventName(deviceEventName, action);

  // 3. 发送跳转协议(iOS)
  if(Platform.OS === 'ios'){
    loadReactNative(action);
  }

};

function pop({deviceEventName, result}) {

  const error = checker(
    arguments,
    [{deviceEventName:'s', result:'s'}],
    'viewController.pop'
  )

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  viewController.popViewControllerWithDeviceEventName(deviceEventName, result);
}


// 如果 app 的该版本中没有该接口，抛出 undefined。
if(!(viewController)){
  push = pop = undefined;
}

export {push,pop}
