import React from 'react';
import {NativeModules, Platform,DeviceEventEmitter} from 'react-native';
import checker from '../util/checker';


// 目前只针对发现页面生效
const isAndroid = Platform.OS === 'android';

let externalButtonHandle = () => {}


DeviceEventEmitter.addListener('discover_extern_event', (e) => {


  if(typeof externalButtonHandle == 'function') {

    externalButtonHandle(e)
  }

});


function show(params) {
  //导航栏返回事件
  const error = checker(arguments, [{type:"s",rt_ext:"o",config:"a"}], 'externalButton.show');

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  if (isAndroid) {
    NativeModules.WBDiscoverExternButton.show(JSON.stringify(params));
  } else {
    NativeModules.WBDiscoverExternButton.show(params);
  }
}


function hide(param) {

  NativeModules.WBDiscoverExternButton.hide();

}


function setHandle(fn) {

  // 类型检查
  const error = checker(
    arguments,
    ['f'],
    'externalButton.setHandle'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  externalButtonHandle = fn

}


function getHandle() {

  return externalButtonHandle

}

function removeHandle(param) {

  externalButtonHandle = undefined

}


export const externalButton = {
  show,
  hide,
  setHandle,
  getHandle,
  removeHandle,
}