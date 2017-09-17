import {NativeModules, DeviceEventEmitter, Platform} from 'react-native';

import {naviBack} from './back';

const eventMap = {
  'back':{
    nativeMethed: naviBack,
  }
};

export function on(event,callback){
  let events = event.split('.');
  let callbackId = events[1];
  event = events[0];


  if(eventMap[event]){
    // 调用绑定事件对应的 native 方法，调用该方法后有个唯一的返回值
    eventMap[event][callback] = eventMap[event].nativeMethed(callback);
    // 命名空间
    if(callbackId){
      eventMap[event][callbackId] = eventMap[event][callback];
    }
  }
}

export function off(event,callback){
  let events = event.split('.');
  let callbackId = events[1];
  event = events[0];


  if(eventMap[event]){
    let subscrition = eventMap[event][callback] || eventMap[event][callbackId]
    subscrition && subscrition.remove();
  }
}
