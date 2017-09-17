import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';


export function asyncSingleSelect(param) {

  const error = checker(arguments,
    [
      {title:'s', showKey:'s',optionKey:'s',options:['o']},
    ],
    'singleselect'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  return new Promise(function (resolve) {
    NativeModules.WBSingleSelector.showSingleSelectorWithOptions(param, resolve);
  });

}

export function singleSelect(p,c){
  asyncSingleSelect(p).then(c)
}
