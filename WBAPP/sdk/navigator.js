import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';



const  topRightReg = /^sou|map|hide$/;


export function navigator(pamars) {

  if(Platform.OS === 'android'){
    pamars = JSON.stringify(pamars)
  }

  NativeModules.WBPageTransferDispatcher.dispatchTransferActionWithAction(pamars);

};


export function loadPage({pagetype='link', url, title, top_right, ...rest}) {

  const error = checker(
    arguments,
    [{pagetype:'s', url:'s', title:'s', top_right:'s'}],
    'loadPage'
  )

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  if(Platform.OS === 'android'){
    if(pagetype === 'usercenterbusiness'){
      pagetype = "mypublish";
    }
  }

  const pamars = {
    action:'loadpage',
    pagetype,
    url,
    title,
    ...rest
  };

  if (top_right) {
    if (!topRightReg.test(top_right)) {
      top_right = "hide";
    }
    pamars.top_right = top_right;
  }

  navigator(pamars);
}


export function loadReactNative({
  action='pagetrans',//必填
  tradeline='RN',  //必填
  content,
  ...rest
}){



  const error =checker(
    arguments,
    [{action:'s',tradeline:'s',content:'o'}],
    'loadReactNative',
  )
  
  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  content.pagetype = 'RN';


  const naviParams = {
    action,
    tradeline,
    content,
    ...rest
  }

  navigator(naviParams);
}
