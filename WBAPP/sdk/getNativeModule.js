import {NativeModules} from 'react-native';

const WBAPPList = [
  "WBLoginServiceManager",
  "WBLoadData",
  "WBPay",
  "WBLoadingBar",
  "WBToast",
  "WBAreaManager",
  "WBSingleSelector",
  "WBCustomDialogManager",
  "WBTitleImageDialog",
  "WBPhotoSelector",
  "WBPageTransferDispatcher",
  "WBRCTCarrierViewController",
  "WBShare",
  "WBVoiceRecordViewManager",
  "WBInitialParams",
  "WBFinishPage",
  "WBUserLog",
  "WBMultiUnlinkSelector",
  "WBLocation",
  "WBShowCommunitySearch",
  "WBHttpClientHeader",
  "WBIndustryManager",
];


// 手动去重
// WBAPPList.filter((value,index) => {
//
//   for(let i = index + 1; i < WBAPPList.length; i++) {
//     if(WBAPPList[i] == value){
//       console.log(value)
//       return false
//     }
//   }
//
//   return true
// });
//

export function getNativeModule(property) {

  if(__DEV__){
    const existing = WBAPPList.some(name => name === property);

    if(existing){
      console.error("直接通过 NativeModules 调用 Native 的接口有风险。如果中间层满足不了业务需求，请先联系无线的同学。");
    }
  }

  return NativeModules[property]
}
