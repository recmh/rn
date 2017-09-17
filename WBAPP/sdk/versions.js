// import WBAPP from '../../WBAPP';


// let appVersion = "";

// // 版本相等返回 0,第一个传入的版本高于第二个版本 1，第一个传入的版本低于第二个版本 －1.
// function compareVersions(firstVersion,secondVersion){
  
//   function _reduce(sum,ver,index,array){
//     return sum + ver*Math.pow(100,array.length - 1 - index);
//   }

//   var result = firstVersion.split(".").reduce(_reduce,0) - secondVersion.split(".").reduce(_reduce,0);

//   return result = 0 ? 0 : result > 0 ? 1 : -1;
// }


// // 当前版本大于或等于传入版本号返回 true，小于返回 false
// function isHigherVersion(flagVersion,callback){



// 	WBAPP.initialParams("WB_HTTP_HEAD",function(e){

// 	})

//   const result = compareVersion(appVersion,flagVersion) >= 0 ? true: false;

//   callback(result);

  
// }