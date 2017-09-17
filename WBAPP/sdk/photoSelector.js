import React, {Component} from 'react';
import {NativeModules,Platform} from 'react-native';
import checker from '../util/checker';
const photoSelector = NativeModules.WBPhotoSelector;


// 调起图片编辑组件
export function asyncPick(params) {
  const error = checker(
    arguments,
    [{max_count: 'n', source_type: 'n',cate_type:"s"}, 'f'],
    'photoSelector.pick',
  );

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  return new Promise((resolve) => {
    photoSelector.pickImages(params, (e)=>{
      if(e.cover_image_url && !/https?\:\/\//.test(e.cover_image_url)){
        if(Platform.OS == 'android' ){
          e.cover_image_url = 'file://' + e.cover_image_url
        }
      }

      resolve(e);

    });
  });
}

export function pick(p,c) {
  asyncPick(p).then(c);
}

// 在保存时，获取调起后用户选择的图片。
export function asyncSave(params) {
  const error = checker(arguments, [{draftContent: 's'}, 'f'], 'photoSelector.save');

  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  return new Promise((resolve) => {
    photoSelector.saveDraftToDraftBox(params, resolve);
  });
}

export function save(p,c) {
  asyncSave(p).then(c);
}

// 读取草稿
export function asyncReadCache(params) {
  return new Promise((resolve) => {
    photoSelector.readDraftBoxContent(params, resolve);
  });
}

export function readCache(params,callback) {
  const error = checker(arguments, ['o', 'f'], 'photoSelector.readCache');
  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  asyncReadCache(params).then(callback)
}


// 读取服务器地址
export function asyncReadRemoteUrls(params, callbabck) {
  return new Promise((resolve) => {
    photoSelector.readDraftBoxImages(params, resolve);
  });
}

export function readRemoteUrls(params, callbabck) {
  const error = checker(arguments, ['o', 'f'], 'photoSelector.readRemoteUrls');
  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  asyncReadRemoteUrls(params).then(callbabck);
}

// 将远程图片写入图片选择器的内存中
export function setImages(urls){
  photoSelector.downloadImages(urls);
}

// 在用户发布后，或者删除草稿时，删除图片缓存。
export function deleteCache(params) {
  const error = checker(arguments, ['o'], 'photoSelector.deleteCache');
  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }

  photoSelector.deleteDraftBox(params);
}
