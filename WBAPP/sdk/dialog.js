import React from 'react';
import {NativeModules, Platform,DeviceEventEmitter} from 'react-native';

import checker from '../util/checker';

const RCTDialog = NativeModules.WBCustomDialogManager;
const RCTImageDialog = NativeModules.WBTitleImageDialog;

export function asyncAlert(param) {

  // 类型检查
  const error = checker(
    arguments,
    [{title: 's', message: 's', btn: 's'}],
    'dialog.alert'
  );


  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  let {title="提示", message="", btn="确定"} = param;

  return new Promise(function (resolve) {
    RCTDialog.show(title, message, null, btn, false, (e)=> {
      resolve(e);
    });
  });

}

export function alert(p,c) {
  asyncAlert(p).then(c)
}

export function asyncConfirm(param ) {

  // 类型检查
  const error = checker(arguments,
    [
      {title: 's', message: 's', cancelBtn: 's', confirmBtn: 's'},
    ],
    'dialog.confirm'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  let {title="", message="", cancelBtn="取消", confirmBtn="确定"} = param;

  return new Promise(function (resolve) {
    RCTDialog.show(title, message, cancelBtn, confirmBtn, false, (e)=> {
      resolve(e);
    });
  });

}

export function confirm(p,c) {
  asyncConfirm(p).then(c)
}

let lastCallback, subscription;

export let confirmPic = {
  show: function (param, callback) {
    // 类型检查
    const error = checker(arguments,
      [
        {title: 's', content: 's', negativeButtonTxt: 's', positiveButtonTxt: 's', imageUrl: "s"},
        'f'
      ],
      'dialog.confirmPic.show'
    );

    // 线上环境报错不调起 Native 的 API
    if(error === 'error'){
      return error
    }

    let {title="", content="", negativeButtonTxt="取消", positiveButtonTxt="确定", imageUrl} = param;

    // 如果是不同回调，先取消上次订阅，再重新注册。
    if (callback !== lastCallback) {
      subscription && subscription.remove();
      subscription = DeviceEventEmitter.addListener('RCTDidButtonSelectedEvent', callback);
    }

    if (Platform.OS === 'ios') {

      // ios 默认图片地址为 shield
      RCTImageDialog.show(imageUrl="shield", title, content, negativeButtonTxt, positiveButtonTxt);

    } else {
      param.imageUrl = "";
      RCTImageDialog.show(param);

    }

  },
  dismiss: function(){
    RCTImageDialog.dismiss && RCTImageDialog.dismiss();
  }
}
