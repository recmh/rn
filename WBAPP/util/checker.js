/*
* @method checker(args, types, track) 检测函数参数数据类型
* @param  args<likeArray>  函数的参数 arguments
* @param  types<Array>     函数 arguments 的数据类型 和 types 的数据类型一一对应
*         需要检查的数据类型表示参见 typeName。如过第一个函数参数是 String。 types 可以这样写 ['s']。
*         必填参数检测。 types 可以这样写 ['s|r']。 (r = requirement)
*         如果是需要深度检测 Object 或 Array 的数据类型。types可以这样写 [{a:'o',b:'s'},[c:'o',s:]]
* @param track<String>     函数名
* */

const typeName = {
  "a": "Array",
  "b": "Boolean",
  "d": "Date",
  "e": "Error",
  "f": "Function",
  "n": "Number",
  "r": "RegExp",
  "s": "String",
  "o": "Object"
};

const tracks = [];

function getType(obj) {
  if (obj == null) {
    return obj + "";
  }

  const class2type = {};
  let types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");

  types.forEach(function (item, index, array) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });

  return typeof obj === "object" || typeof obj === "function" ?
  class2type[class2type.toString.call(obj)] || "object" :
    typeof obj;
}

function throwError(tracks,rightType){

  let errorMsg = '参数类型错误:' +tracks.shift() + '的arguments[' + tracks.join('][') + ']' + '的数据类型应该为' + rightType;

  throw new Error(errorMsg);
}

function throwRequrementError(tracks) {
  let errorMsg = '缺少必填的参数:' +tracks.shift() + '的arguments[' + tracks.join('][') + ']' + '为必填参数';

  throw new Error(errorMsg);
}

function throwCheckerError() {
  throw  new Error(track.shift()+'的checker参数类型错误');
}

// 线上环境不报错，也不调Native的API
if(!__DEV__){
  throwCheckerError = throwRequrementError = throwError = function () {
    return 'error';
  }
}


function checker(args, types, track) {

  tracks.push(track);

  switch (getType(types)){
    case 'object':
      if(getType(args) ==='object'){
        for(let key in types){
          if(checker(args[key],types[key],key) === 'error') {
            return 'error';
          }
          tracks.pop();
        }
      } else {
        return throwError(tracks,'Object');
      }
      break;
    case 'array':
      let isArray = getType(args) ==='array';
      let isLikeArray = getType(args) ==='object' && args.length;

      if(isArray || isLikeArray){
        for(let i = 0;i< types.length;i++){

          if(checker(args[i],types[i],i) === 'error') {
            return 'error';
          }

          tracks.pop();
        }
      } else {
        return throwError(tracks,'Array');
      }
      break;
    case 'string':

      // 缺少必填参数
      let requirement = types.split('|')[1] === 'r';
      if(requirement && args === undefined){
        return throwRequrementError(tracks);
      }

      // 参数类型错误
      types = typeName[types.slice(0,1)];
      if(args !== undefined && types.toLowerCase() !== getType(args)){
        return throwError(tracks,types);
      }

      tracks.pop();

      break;
    default :
      return throwCheckerError();
  }
}



export default checker;
