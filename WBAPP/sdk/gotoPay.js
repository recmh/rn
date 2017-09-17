import React from 'react';
import {NativeModules,Platform} from 'react-native';

import checker from '../util/checker';
import WBAPP from '../../WBAPP';


let cVersion = "";

WBAPP.initialParams("WB_HTTP_HEAD",function(e){
  cVersion = e.WB_HTTP_HEAD.version;
});


// // 版本相等返回 0,第一个传入的版本高于第二个版本 1，第一个传入的版本低于第二个版本 －1.

function isHigherVersion(firstVersion,secondVersion){

  function _reduce(sum,ver,index,array){
    return sum + ver*Math.pow(100,2- index);
  }
  var result = firstVersion.split(".").reduce(_reduce,0) - secondVersion.split(".").reduce(_reduce,0);

  return result == 0 ? 0 : result > 0 ? 1 : -1;
}



function string2Json(string){
  const obj = {}

  if(typeof string == 'string'){
    const keyValues = string.split("&");

    keyValues.forEach(function(keyValue){
      keyValue = keyValue.split("=");
      keyValue.length && (obj[keyValue[0]] = keyValue[1]);
    });
  }

  return obj;
}


export function asyncGotoPay({payType="balance|wechat|wap|alipay",...rest}) {
  const error = checker(
    arguments,
    ['o'],
    'getLocation'
  )
  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  const payParams = {
    payType,
    ...rest
  }

  return new Promise(function (resolve) {

    // 7.3.0 以上版本，有 NativeModules.WBLoadData，这时屏蔽从微信调起的页面的支付宝接口。
    if(NativeModules.WBLoadData && isHigherVersion(cVersion,"7.3.1") >= 0 ){

      WBAPP.loadNativeData("jumpinfo",function(e){

        if(string2Json(e).wlsour === "weixin"){

          if(!payParams.payType){
            payParams.payType = "balance|wechat";
          }else{
            payParams.payType = payParams.payType.split('|').filter(function(type){
              return type != 'wap' && type != 'alipay';
            }).join('|');

            if(!payParams.payType){
              WBAPP.toast({message:"抱歉，暂不支持当前支付方式，请使用网页版进行支付！",time:3})
              return
            }
          }
        }
        NativeModules.WBPay.gotoPay(payParams,resolve);

      });
    }else{
      NativeModules.WBPay.gotoPay(payParams,resolve);
    }
    
  });

}


export function gotoPay(p,c) {

  asyncGotoPay(p).then(c);

}
