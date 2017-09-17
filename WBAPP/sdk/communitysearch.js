import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';

const CommunitySearch = NativeModules.WBShowCommunitySearch;



export function asyncCommunitySearch(data) {

  //小区选择参数校验

  const error = checker(arguments,
    [
      {
        defaultShow:'s',
        lat:"s",
        long:"s",
        range:"s",
        num:"s",
        localFullPath:"s",
      }
    ],
    'communitysearch'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  if(Platform.OS == 'android'){
    data = JSON.stringify(data);
  }

  return new Promise(function (resolve) {
    CommunitySearch.showCommunitySearch(data, (e)=> {
      resolve(e);
    });
  });


}

export function communitySearch(p,c) {
  asyncCommunitySearch(p).then(c);
}
