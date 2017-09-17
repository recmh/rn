import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';

import {isHigherVersion} from '../util/version';
import initialData from '../util/initialData';
import WBAPP from '../../WBAPP';


export function login(callback) {

    const argType = Object.prototype.toString.call(callback);

    if(callback === undefined || argType !== '[object Function]') {
        callback = function(){};
    }

    //增加版本兼容，7.13之上支持回调
    // WBAPP.initialParams("WB_HTTP_HEAD",function(e){
    //   const cVersion = e.WB_HTTP_HEAD.version;
    //   // alert(cVersion)
    //   if(isHigherVersion(cVersion,"7.13.0") >= 0){
    //     NativeModules.WBLoginServiceManager.show(callback);
    //   }else{
    //     NativeModules.WBLoginServiceManager.show();
    //   }
    // });

    initialData().then(e => {
      const cVersion = e.WB_HTTP_HEAD.version;
      if(isHigherVersion(cVersion,"7.13.0") >= 0){
        NativeModules.WBLoginServiceManager.show(callback);
      }else{
        NativeModules.WBLoginServiceManager.show();
      }
    })

}
