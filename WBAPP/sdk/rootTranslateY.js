import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';

// NativeModules.WBRCTCarrierViewController.obtainRootViewPosition((e)=>{alert(JSON.stringify(e))})

export function asyncGetRootYIOS() {

  return new Promise(function(resolve){
      NativeModules.WBRCTCarrierViewController.obtainRootViewPosition(resolve);
  });

}


export function rootMoveTo(params) {

  const error = checker(
    arguments,
    [{ios:'n',andr:'n'}],
    'rootMoveTo'
  )

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  let {ios=-20,andr=0} = params;

  if(Platform.OS === 'ios'){
    async function setRoot() {
      let y = await asyncGetRootYIOS();
      // 将 root 位移到 ios 设置的位置
      ios = ios - y.yposition;
      NativeModules.WBRCTCarrierViewController.changeRootViewPosition(ios);
    }

    setRoot();

  }else{
    NativeModules.WBRCTCarrierViewController.changeRootViewPosition(andr);
  }

}
