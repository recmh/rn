import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';

const WBUserLog = NativeModules.WBUserLog;

export function set(param) {

  //埋点参数校验

  const error = checker(arguments,
    [
      {pagetype:'s',actiontype:'s',cate:'s',paramsArray:'a'}
    ],
    'weblog'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  //埋点赋值
  let {pagetype="", actiontype="", cate="", paramsArray=[]} = param;


  if( Platform.OS === 'ios' ){
    //IOS没有cate参数
  	WBUserLog.statistics(pagetype,actiontype,paramsArray);
  }else{
  	WBUserLog.statisticsWithCate(pagetype,actiontype,cate,paramsArray);
  }
}
