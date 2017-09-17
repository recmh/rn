// initialData.js
// 获取Header头和跳转协议信息
import WBAPP from '../../WBAPP';


let initialdata ;

// 引入该模块时就发一次，理论上相当于引入 WBAPP 就会调用，在这个时候先获取一次 httpHeader
WBAPP.initialParams('WB_JUMPER|WB_HTTP_HEAD', nativePostData => {
  if (nativePostData) {
     initialdata = nativePostData
  }
});


export default function initialData (){
  return new Promise(function(resolve, reject) {

    // 如果调用之前就获取成功了，就不再获取了
    if (initialdata) {
      resolve(initialdata);
    } else {
    // 否则再重新发请求获取一次
      WBAPP.initialParams('WB_JUMPER|WB_HTTP_HEAD', nativePostData => {
        if (nativePostData) {
         // 获取成功后，保存在本地
          initialdata = nativePostData
          resolve(initialdata);
        } else {
          reject('没有 nativePostData 数据');
        }
      });
    }
  })
}
