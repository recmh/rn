import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';

const WBMultiUnlinkSelector = NativeModules.WBMultiUnlinkSelector;


export function asyncMultiunlinkSelector(param) {

  //埋点参数校验
  const error = checker(arguments,
    [
      {title:'s', optionVals:'a',showKeys:['s'],optionKeys:['s'],options:['a']}
    ],
    'multiunlinkselector'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


/*
* @ methed multiunlinkSelector 多级无联动选择
* @ params title <String> 头部信息
* @ params option <Array>  每列信息 [[第一列信息],[第二列...]]
* @ params optionKeys <Array>  配置每列信息的逻辑值的key  [第一列信息的逻辑值的key,第二列...] 由于每个业务线的逻辑值的 key 命名可能不一样，所以才有这项配置
* @ params showKeys <Array> 配置每列信息的展现值的key [第一列信息的展现值的key,第二列...] 由于每个业务线的展现值的 key 命名可能不一样，所以才有这项配置
* @ params optionVals <Array>  多选默认选中的值 [第一列信息的逻辑值的value，第二列...]
*
*/

  return new Promise(function (resolve, reject) {
    WBMultiUnlinkSelector.showMultiUnlinkSelectorWithOptions(param,resolve );
  });

}

export function multiunlinkSelector(p,c){
  asyncMultiunlinkSelector(p).then(c);
}
