import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';

export function asyncArea({title="",cateid=""}) {

  //埋点参数校验
  const error = checker(arguments,
    [
      {title:'s'}
    ],
    'area'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  //返回值callbak({cancel:false,value:'三室'})

  return new Promise(function (resolve) {
    NativeModules.WBAreaManager.showArea(title,cateid, resolve);
  });

}

export function area(p,c) {
  asyncArea(p).then(c);
}
