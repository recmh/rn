import React from 'react';
import {NativeModules, Platform} from 'react-native';

import checker from '../util/checker';

export function asyncGetLocation() {

  return new Promise(function (resolve) {
    NativeModules.WBLocation.getLocation((e)=>{
      if(Platform.OS == 'android'){
        e = JSON.parse(e);
      }

      resolve(e);
    });
  });

}

export function getLocation(c) {
  asyncGetLocation().then(c);
}
