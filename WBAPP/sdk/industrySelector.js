import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';

const industry = NativeModules.WBIndustryManager;


function asyncIndustrySelector({pageTitle,cateId, indusData}) {

  // 埋点参数校验
  const error = checker(arguments,
    [
      {pageTitle:'s', cateId:'s',indusData:'o'}
    ],
    'industrySelector'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  if(Platform.OS === 'android'){
    indusData = JSON.stringify(indusData)
  }

  return new Promise(function (resolve, reject) {
    industry.showIndustry(pageTitle,cateId, indusData,resolve );
  });
}

function industrySelector(p,c){
  asyncIndustrySelector(p).then(c);
}

// 如果 app 的该版本中没有该接口，抛出 undefined。
if(!(industry && industry.showIndustry)){
  industrySelector = asyncIndustrySelector = undefined;
}


export {asyncIndustrySelector,industrySelector};
