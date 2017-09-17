import {NativeModules,Platform} from 'react-native';
import checker from '../util/checker';
export function asyncInitialParams(action = 'ALL') {
  const error = checker(arguments, ['s'], 'initialParams');
  // 线上环境报错不调起 Native 的 API
  if(error === 'error'){
    return error
  }


  // 参考 http://c.58corp.com/pages/viewpage.action?pageId=5112099
  const actionsMap = {'ALL': '1024', 'WB_HTTP_HEAD': '2', 'WB_JUMPER': '4'};

  // 将‘WB_HTTP_HEAD|WB_JUMPER’ 转换为 2|4 的形式传给 Native
  for (let key in actionsMap) {
    action = action.replace(key, actionsMap[key]);
  }

  let actions = action.split('|');
  let nativeTypeData = 0;

  for (let value of actions) {
    nativeTypeData = value | nativeTypeData;
  }

  return new Promise(function(resolve, reject) {
    NativeModules.WBInitialParams.obtainInitialParams(nativeTypeData, (e)=>{

      if(Platform.OS == 'android'){
        for(let key in e){
          e[key] = JSON.parse(e[key]);
        }
      }

      resolve(e);
    });
  });
}

export function initialParams(p,c) {
  asyncInitialParams(p).then(c);
}
