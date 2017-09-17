import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';



export function share({
    type,  //   type  目前支持imageshare和weather两种，imageshare为图片分享，weather为天气分享（必传）
    title= "标题",  // title 分享标题（必传）
    url= "http://www.58.com",  // url 分享出去后用户点击后跳转的url（必传）
    picUrl="http://img.58cdn.com.cn/logo/m58/40_40/logo.png",  // picUrl  分享图片url（选传）
    placeholder= "微博分享时默认的一句话（选传，分享微博时用到）",  // placeholder 微博分享时默认的一句话（选传，分享微博时用到）
    content= "分享文本内容（必传）",  // content 分享文本内容（必传）
    // shareto: "QQ",  // shareto 单一渠道分享，目前安卓支持QQ，SINA，FRIENDS(朋友圈)，WEIXIN四种（和extshareto二选一必传）
    // extshareto= "FRIENDS,WEIXIN,QQ,SINA",  // extshareto  多渠道分享，渠道以‘,’间隔。例如“QQ,SINA,FRIENDS”（和shareto二选一必传）
    // pagetype  只在列表详情页分享用到，（选传）
    // localUrl  分享图片的本地地址uri（选传）
    // params  只在任务中心用到（选传）
    // dataURL 图片64位字节码（选传）
    ...rest,
  },callback =()=>{}) {

  // 埋点参数校验
  const error = checker(arguments,
    [
      {type:'s',title:'s',picUrl:'s',placeholder:'s',content:'s',extshareto:'s'},
      'f'
    ],
    'share'
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  let params;

  if(Platform.OS == 'ios'){
     params = JSON.stringify({
      "action":"info_share",
      "type": type || "weather",  //   type  目前支持imageshare和weather两种，imageshare为图片分享，weather为天气分享（必传）
      "data":{
        title,  // title 分享标题（必传）
        url,  // url 分享出去后用户点击后跳转的url（必传）
        "picurl":picUrl,  // picUrl  分享图片url（选传）
        placeholder,  // placeholder 微博分享时默认的一句话（选传，分享微博时用到）
        content,  // content 分享文本内容（必传）
      },
     ...rest,
    })
  } else {
    params = JSON.stringify({
      type: type || "weather",  //   type  目前支持imageshare和weather两种，imageshare为图片分享，weather为天气分享（必传）
      title,  // title 分享标题（必传）
      url,  // url 分享出去后用户点击后跳转的url（必传）
      picUrl,  // picUrl  分享图片url（选传）
      placeholder,  // placeholder 微博分享时默认的一句话（选传，分享微博时用到）
      content,  // content 分享文本内容（必传）
      ...rest,
    });
  }

  NativeModules.WBShare.share(params,callback);
}
