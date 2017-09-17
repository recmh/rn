import WBAPP from '../../WBAPP';

// // 版本相等返回 0,第一个传入的版本高于第二个版本 1，第一个传入的版本低于第二个版本 －1.

export function isHigherVersion(firstVersion,secondVersion){

  function _reduce(sum,ver,index,array){
    return sum + ver*Math.pow(100,2- index);
  }
  var result = firstVersion.split(".").reduce(_reduce,0) - secondVersion.split(".").reduce(_reduce,0);

  return result == 0 ? 0 : result > 0 ? 1 : -1;
}
