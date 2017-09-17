import WBAPP from '../../../WBAPP';

function backFn() {
  WBAPP.alert({ message: '监听并已，已阻止默认的退出事件' });
}

const bundleId = '7';

export const sdkContent = [
  {
    name: '返回上级页面',
    apis: [
      {
        name: 'WBAPP.goBack() | 退出当前页面，返回上级页面',
        fn: function() {
          // 退出当前页面，返回上级页面
          WBAPP.goBack();
        },
      },
      {
        name: 'WBAPP.back.setHandle() | 监听，并阻止默认的退出事件',
        fn: function() {
          // 监听并已，已阻止默认的退出事件
          WBAPP.back.setHandle(backFn);
        },
      },
      {
        name: 'WBAPP.back.getHandle() | 获取当前的退出监听事件',
        fn: function() {
          const fn = WBAPP.back.getHandle();
          WBAPP.alert({ message: fn + '' });
        },
      },
      {
        name: 'WBAPP.back.removeHandle() | 删除监听事件',
        fn: function() {
          WBAPP.back.removeHandle();
        },
      },
    ],
  },
  {
    name: '弹窗提示',
    apis: [
      {
        name: 'WBAPP.alert | 单个按钮弹窗',
        fn: function() {
          // 传入参数
          const params = {
            title: '提示',
            message: '1111',
            btn: '按钮名称',
          };

          // 回调函数调用
          WBAPP.alert(params);
        },
      },
      {
        name: 'WBAPP.confirm | 两个按钮弹窗',
        fn: function() {
          // 参数
          const params = {
            title: '提示',
            message: '是否确认上传文件?',
            cancelBtn: '取消',
            confirmBtn: '确定',
          };

          // 回调函数调用
          WBAPP.confirm(params);
        },
      },
      {
        name: 'WBAPP.dialogPic.show & dismiss | 发布专用弹窗',
        fn: function() {
          WBAPP.dialogPic.show(
            {
              title: '提示',
              content: '是否确认上传文件?',
              negativeButtonTxt: '取消',
              positiveButtonTxt: '确定',
            },
            e => {
              if (e === '0') {
                //  控制隐藏
                WBAPP.dialogPic.dismiss();
              }
              WBAPP.alert({ message: e });
            },
          );
        },
      },
    ],
  },
  {
    name: '提示（自动隐藏）',
    apis: [
      {
        name: 'WBAPP.toast',
        fn: function() {
          // 参数
          const params = {
            message: '提示信息',
            time: 2,
          };

          // 回调函数调用
          WBAPP.toast(params);
        },
      },
    ],
  },
  {
    name: '单选选择器',
    apis: [
      {
        name: 'WBAPP.singleSelect',
        fn: function() {
          // 参数
          const param = {
            title: '房型',
            optionVal: 121,
            showKey: 'value',
            optionKey: 'id',
            options: [
              { value: '一室', id: 121 },
              { value: '两室', id: 122 },
              { value: '三室', id: 123 },
              { value: '四室', id: 124 },
              { value: '五室', id: 155 },
            ],
          };

          // 回调方式函数调用
          WBAPP.singleSelect(param, e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
    ],
  },
  {
    name: '多选无联动选择器',
    apis: [
      {
        name: 'WBAPP.multiunlinkSelector',
        fn: function() {
          // 传入参数
          const param = {
            title: '房型',
            optionVals: [1, 12312, 12312],
            showKeys: ['value', 'value', 'value'],
            optionKeys: ['id', 'id', 'id'],
            options: [
              [
                { value: '1室', id: 4 },
                { value: '2室', id: 2 },
                { value: '3室', id: 3 },
                { value: '4室', id: 1 },
                { value: '5室', id: 5 },
                { value: '6室', id: 6 },
              ],
              [
                { value: '1厅', id: 123 },
                { value: '2厅', id: 234 },
                { value: '3厅', id: 12312 },
                { value: '4厅', id: 567 },
                { value: '5厅', id: 89 },
                { value: '6厅', id: 11 },
              ],
              [
                { value: '1卫', id: 55 },
                { value: '2卫', id: 12312 },
                { value: '3卫', id: 45 },
                { value: '4卫', id: 11 },
                { value: '5卫', id: 22 },
                { value: '6卫', id: 34 },
              ],
            ],
          };

          // 回调函数方式调用
          WBAPP.multiunlinkSelector(param, e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
    ],
  },
  {
    name: '页面跳转(完整协议)',
    apis: [
      {
        name: 'WBAPP.navigator',
        fn: function() {
          // 参数
          const params = {
            action: 'pagetrans',
            content: {
              cateid: 13815,
              filterParams: {
                filtercate: 'baoanl',
              },
              list_name: 'jiazhengbaojiexin',
              meta_url: 'http://app.58.com/api/list',
              pagetype: 'list',
              params: {
                cmcstitle: 'U4fddU5b89',
              },
              title: 'U4fddU5b89',
            },
            source: 'nikenengzaizhao',
            tradeline: 'job',
          };
          // 回调函数调用
          WBAPP.navigator(params);
        },
      },
    ],
  },
  {
    name: '页面跳转(跳转到 web 页面)',
    apis: [
      {
        name: 'WBAPP.loadPage',
        fn: function() {
          const params = {
            pagetype: 'link',
            title: '58同城',
            url: 'http://stocks.sina.cn/us/?vt=4&code=wuba',
            hideBar: 0,
          };

          WBAPP.loadPage(params);
        },
      },
    ],
  },
  {
    name: '页面跳转(跳转到 RN 页面)',
    apis: [
      {
        name: 'WBAPP.loadReactNative',
        fn: function() {
          // 参数
          const params = {
            content: {
              title: '页面 7', //必填
              backtoroot: false, //兼容Android4.0，必填
              params: {
                hideBar: 0, // 不隐藏头部
              },
              bundleid: '7', //内置为2。 RN资源唯一标示符  必填
              isfinish: false, //非必填，默认为false。如果为true，则跳转后销毁当前页面，返回时返回到当前页面的父页面。
            },
          };

          WBAPP.loadReactNative(params);
        },
      },
      {
        name: 'WBAPP.loadReactNative | 隐藏头部',
        fn: function() {
          // 参数
          const params = {
            content: {
              title: '页面 7', //必填
              backtoroot: false, //兼容Android4.0，必填
              params: {
                hideBar: 1, // 隐藏头部
              },
              bundleid: '7', //内置为2。 RN资源唯一标示符  必填
              isfinish: false, //非必填，默认为false。如果为true，则跳转后销毁当前页面，返回时返回到当前页面的父页面。
            },
          };

          WBAPP.loadReactNative(params);
        },
      },
      {
        name: 'WBAPP.loadReactNative | 调相同 bundleid',
        fn: function() {
          // 参数
          const params = {
            content: {
              title: '标题', //必填
              backtoroot: false, //兼容Android4.0，必填
              params: {
                hideBar: 0, // 不隐藏头部
              },
              bundleid: '7', //内置为2。 RN资源唯一标示符  必填
              isfinish: false, //非必填，默认为false。如果为true，则跳转后销毁当前页面，返回时返回到当前页面的父页面。
            },
          };
          WBAPP.loadReactNative(params);
        },
      },
    ],
  },
  {
    name: '发送埋点',
    apis: [
      {
        name: 'WBAPP.setWebLog',
        fn: function() {
          // 参数
          const params = {
            pagetype: 'click',
            actiontype: 'mypublish',
            cate: '5,39',
            paramsArray: ['1', 'true', '111'],
          };

          WBAPP.setWebLog(params);
        },
      },
    ],
  },
  {
    name: '语音输入',
    apis: [
      {
        name: 'WBAPP.voiceRecord.show | 打开语音输入',
        fn: function() {
          // 参数
          WBAPP.voiceRecord.show(e => {
            if (e.WBVoiceRecordState) {
              // 成功
              // console.log(e.WBVoiceRecordResult)
            }
          });
        },
      },
      {
        name: 'WBAPP.voiceRecord.dismiss | 强行关闭语音输入',
        fn: function() {
          // 参数
          WBAPP.voiceRecord.dismiss();
        },
      },
    ],
  },
  {
    name: '加载动画',
    apis: [
      {
        name: 'WBAPP.loading (block)',
        fn: function() {
          // 参数
          let param = {
            cmd: 'show',
            type: 'block',
          };

          WBAPP.loading(param);

          setTimeout(() => {
            // 参数
            let param = {
              cmd: 'hide',
              type: 'block',
            };

            WBAPP.loading(param);
          }, 2000);
        },
      },
      {
        name: 'WBAPP.loading (nonblock)',
        fn: function() {
          // 参数
          let param = {
            cmd: 'show',
            type: 'nonblock',
          };

          WBAPP.loading(param);

          setTimeout(() => {
            // 参数
            let param = {
              cmd: 'hide',
              type: 'nonblock',
            };

            WBAPP.loading(param);
          }, 2000);
        },
      },
      {
        name: '(nonblock)IOS 带height参数(400)',
        fn: function() {
          // 参数
          let param = {
            cmd: 'show',
            type: 'nonblock',
            height: 400,
          };

          WBAPP.loading(param);

          setTimeout(() => {
            // 参数
            let param = {
              cmd: 'hide',
              type: 'nonblock',
            };

            WBAPP.loading(param);
          }, 2000);
        },
      },
    ],
  },
  {
    name: '图片上传&编辑 | 发布专用',
    apis: [
      {
        name: 'WBAPP.photoSelector.pick',
        fn: function() {
          //  传入参数
          const pickParams = {
            cateID: 'house',
            max_count: 24,
            source_type: 0,
            cate_type: '11',
          };

          WBAPP.photoSelector.pick(pickParams, e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
      {
        name: 'WBAPP.photoSelector.save',
        fn: function() {
          let saveParam = {
            draftContent: '以String格式保存草稿',
            cateID: 'house',
          };

          WBAPP.photoSelector.save(saveParam, e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
      {
        name: 'WBAPP.photoSelector.readCache',
        fn: function() {
          // 保存草稿
          const readCacheParam = { cateID: 'house' };
          WBAPP.photoSelector.readCache(readCacheParam, e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
      {
        name: 'WBAPP.photoSelector.readRemoteUrls',
        fn: function() {
          let readRemoteUrls = { cateID: 'house' };
          WBAPP.photoSelector.readRemoteUrls(readRemoteUrls, e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
      {
        name: 'WBAPP.photoSelector.setImages',
        fn: function() {
          // 传入参数
          let setImagesParam = {
            urls: ['http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2'],
          };
          // 调用代码
          WBAPP.photoSelector.setImages(setImagesParam);
        },
      },
      {
        name: 'WBAPP.photoSelector.deleteCache',
        fn: function() {
          // 传入参数
          const cateID = 'house';

          // 调用代码
          WBAPP.photoSelector.deleteCache({ cateID });
        },
      },
    ],
  },
  {
    name: '读取页面初始化参数',
    apis: [
      {
        name: 'WBAPP.initialParams',
        fn: function() {
          WBAPP.initialParams('ALL', e =>
            WBAPP.alert({ message: JSON.stringify(e.WB_JUMPER) }),
          );
        },
      },
    ],
  },
  {
    name: '调起登录页面, 有回调函数',
    apis: [
      {
        name: 'WBAPP.login',
        fn: function() {
          WBAPP.login(function(code) {
            WBAPP.alert({
              message: 'callback run',
            });
          });
        },
      },
    ],
  },
  {
    name: '跳转支付页面',
    apis: [
      {
        name: 'WBAPP.gotoPay balance|wechat|wap|alipay',
        fn: () => {
          // 参数
          const payAction = {
            productName: '1111',
            productDesc: '2222',
            orderMoney: '5.00',
            merId: '1162',
            orderId: '26212746462784',
            notifyUrl:
              'http://post.58.com/repo/payment/paysuccess/backendcallback',
            returnUrl:
              'http://post.58.com/repo/payment/paysuccess/frontendcallback/26212746462784',
            payType: 'balance|wechat|wap|alipay',
          };
          WBAPP.gotoPay(payAction, resultDict => {
            WBAPP.alert({ message: JSON.stringify(resultDict) });
          });
        },
      },
      {
        name: 'WBAPP.gotoPay alipay',
        fn: () => {
          // 参数
          const payAction = {
            productName: '222',
            productDesc: '3333',
            orderMoney: '5.00',
            merId: '1162',
            orderId: '26212746462784',
            notifyUrl:
              'http://post.58.com/repo/payment/paysuccess/backendcallback',
            returnUrl:
              'http://post.58.com/repo/payment/paysuccess/frontendcallback/26212746462784',
            payType: 'alipay',
          };
          WBAPP.gotoPay(payAction, resultDict => {
            WBAPP.alert({ message: JSON.stringify(resultDict) });
          });
        },
      },
      {
        name: 'WBAPP.gotoPay balance|wechat',
        fn: () => {
          // 参数
          const payAction = {
            productName: '2222',
            productDesc: '4444',
            orderMoney: '5.00',
            merId: '1162',
            orderId: '26212746462784',
            notifyUrl:
              'http://post.58.com/repo/payment/paysuccess/backendcallback',
            returnUrl:
              'http://post.58.com/repo/payment/paysuccess/frontendcallback/26212746462784',
            payType: 'balance|wechat',
          };
          WBAPP.gotoPay(payAction, resultDict => {
            WBAPP.alert({ message: JSON.stringify(resultDict) });
          });
        },
      },
    ],
  },
  {
    name: '移动RN承载页 | 特殊页面才可用',
    apis: [
      {
        name: 'WBAPP.rootMoveTo (移到－20或上移一个头部距离)',
        fn: () => {
          WBAPP.rootMoveTo({ ios: -20, andr: 0 });
        },
      },
      {
        name: 'WBAPP.rootMoveTo (移到初始位置)',
        fn: () => {
          WBAPP.rootMoveTo({ ios: 0, andr: -1 });
        },
      },
    ],
  },
  {
    name: 'RN 页面之间的跳转 | 可以携带回传参数，pop 时会销毁页面',
    apis: [
      {
        name: `viewController.push | 我叫${bundleId}跳到 7`,
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值，这里以 bundleId 作为参数。
          WBAPP.viewController.push &&
            WBAPP.viewController.push({
              deviceEventName: bundleId,
              action: {
                content: {
                  bundleid: '7', // RN资源唯一标示符  必填
                  pagetype: 'RN', //必填
                  title: '7', //必填
                  params: {
                    hideBar: 0, // 是否隐藏页面头部
                  },
                },
              },
              callback: function functionName(e) {
                WBAPP.alert({ message: e });
              },
            });
        },
      },
      {
        name: `viewController.push | 我叫${bundleId}跳到 17`,
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值，这里以 bundleId 作为参数。

          WBAPP.viewController.push &&
            WBAPP.viewController.push({
              deviceEventName: bundleId,
              action: {
                content: {
                  bundleid: '17', // RN资源唯一标示符  必填
                  pagetype: 'RN', //必填
                  title: '17', //必填
                  params: {
                    hideBar: 0, // 是否隐藏页面头部
                  },
                },
              },
              callback: function functionName(e) {
                WBAPP.alert({ message: e });
              },
            });
        },
      },
      {
        name: `viewController.push | 我叫${bundleId}跳到 18`,
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值，这里以 bundleId 作为参数。

          WBAPP.viewController.push &&
            WBAPP.viewController.push({
              deviceEventName: bundleId,
              action: {
                content: {
                  bundleid: '18', // RN资源唯一标示符  必填
                  pagetype: 'RN', //必填
                  title: '18', //必填
                  params: {
                    hideBar: 0, // 是否隐藏页面头部
                  },
                },
              },
              callback: function functionName(e) {
                WBAPP.alert({ message: e });
              },
            });
        },
      },
      {
        name: `viewController.push | 我叫A跳到 7`,
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值。

          WBAPP.viewController.push &&
            WBAPP.viewController.push({
              deviceEventName: 'A',
              action: {
                content: {
                  bundleid: '7', // RN资源唯一标示符  必填
                  pagetype: 'RN', //必填
                  title: '7', //必填
                  params: {
                    hideBar: 0, // 是否隐藏页面头部
                  },
                },
              },
              callback: function functionName(e) {
                WBAPP.alert({ message: e });
              },
            });
        },
      },
      {
        name: 'viewController.pop || 跳回 7',
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值，这里以 bundleId 作为参数。
          WBAPP.viewController.pop &&
            WBAPP.viewController.pop({
              deviceEventName: '7',
              result: `from=${bundleId}`,
            });
        },
      },
      {
        name: 'viewController.pop || 跳回 17',
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值，这里以 bundleId 作为参数。
          WBAPP.viewController.pop &&
            WBAPP.viewController.pop({
              deviceEventName: '17',
              result: `from=${bundleId}`,
            });
        },
      },
      {
        name: 'viewController.pop || 跳回 18',
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值，这里以 bundleId 作为参数。
          WBAPP.viewController.pop &&
            WBAPP.viewController.pop({
              deviceEventName: '18',
              result: `from=${bundleId}`,
            });
        },
      },
      {
        name: 'viewController.pop || 跳回 A',
        fn: () => {
          // deviceEventName 为页面名字，可以是任意值。
          WBAPP.viewController.pop &&
            WBAPP.viewController.pop({
              deviceEventName: 'A',
              result: `from=${bundleId}`,
            });
        },
      },
    ],
  },
  {
    name: '调起分享功能',
    apis: [
      {
        name: 'WBAPP.share',
        fn: () => {
          WBAPP.share(
            {
              title: '标题', // title 分享标题（必传）
              url: 'http://www.58.com', // url 分享出去后用户点击后跳转的url（必传）
              picUrl: 'http://img.58cdn.com.cn/logo/m58/40_40/logo.png', // picUrl  分享图片url（选传）
              placeholder: '微博分享时默认的一句话（选传，分享微博时用到）', // placeholder 微博分享时默认的一句话（选传，分享微博时用到）
              content: '分享文本内容（必传）', // content 分享文本内容（必传）
              shareto: 'FRIENDS,WEIXIN,QQ,SINA', // 注意：shareto、extshareto 写成一样的   单一渠道分享，目前安卓支持QQ，SINA，FRIENDS(朋友圈)，WEIXIN四种（和extshareto二选一必传）
              extshareto: 'FRIENDS,WEIXIN,QQ,SINA', // 注意：shareto、extshareto 写成一样的   多渠道分享，渠道以‘,’间隔。例如“QQ,SINA,FRIENDS”（和shareto二选一必传）
              // pagetype  只在列表详情页分享用到，（选传）
              // localUrl  分享图片的本地地址uri（选传）
              // params  只在任务中心用到（选传）
              // dataURL 图片64位字节码（选传）
            },
            function(e) {
              // 分享成功或失败
              WBAPP.alert({ message: e });
            },
          );
        },
      },
      {
        name: 'WBAPP.share | only QQ',
        fn: () => {
          WBAPP.share(
            {
              title: '标题', // title 分享标题（必传）
              url: 'http://www.58.com', // url 分享出去后用户点击后跳转的url（必传）
              picUrl: 'http://img.58cdn.com.cn/logo/m58/40_40/logo.png', // picUrl  分享图片url（选传）
              placeholder: '微博分享时默认的一句话（选传，分享微博时用到）', // placeholder 微博分享时默认的一句话（选传，分享微博时用到）
              content: '分享文本内容（必传）', // content 分享文本内容（必传）
              shareto: 'QQ', // 注意：shareto、extshareto 写成一样的  单一渠道分享，目前安卓支持QQ，SINA，FRIENDS(朋友圈)，WEIXIN四种（和extshareto二选一必传）
              extshareto: 'QQ', //注意：shareto、extshareto 写成一样的   多渠道分享，渠道以‘,’间隔。例如“QQ,SINA,FRIENDS”（和shareto二选一必传）
              // pagetype  只在列表详情页分享用到，（选传）
              // localUrl  分享图片的本地地址uri（选传）
              // params  只在任务中心用到（选传）
              // dataURL 图片64位字节码（选传）
            },
            function(e) {
              // 分享成功或失败
              WBAPP.alert({ message: e });
            },
          );
        },
      },
    ],
  },
  {
    name: '微信调起58app会埋数据，通过这个接口取',
    apis: [
      {
        name: 'WBAPP.loadNativeData',
        fn: () => {
          WBAPP.loadNativeData('jumpinfo', function(e) {
            WBAPP.alert({ message: e });
          });
        },
      },
    ],
  },
  {
    name: '获取 NativeModule 属性',
    apis: [
      {
        name: '直接调用 getNativeModule().show()',
        fn: () => {
          WBAPP.getNativeModule(
            'WBCustomDialogManager',
          ).show(title, 'message', null, 'btn', false, () => {});
        },
      },
      {
        name: "获取不存在值 getNativeModule('a')",
        fn: () => {
          WBAPP.getNativeModule('a');
        },
      },
    ],
  },
  {
    name: '网络请求接口 | Android 专用',
    apis: [
      {
        name: 'WBAPP.requestAndroid',
        fn: () => {
          // url,header,method,params
          WBAPP.requestAndroid(
            {
              url: 'https://dis.58.com/discovery/topic/index/page?pageNum=2',
              header: '',
              method: 'PSOT',
              params: '',
            },
            result => {
              // TODO
              WBAPP.alert({ message: JSON.stringify(result) });
            },
          );
        },
      },
    ],
  },
  {
    name: '获取用户信息',
    apis: [
      {
        name: 'userinfo',
        fn: () => {
          WBAPP.userinfo(result => {
            // TODO
            WBAPP.alert({ message: JSON.stringify(result) });
          });
        },
      },
    ],
  },
  {
    name: '右上角点击 >=7.12.0 只针对发现页面生效',
    apis: [
      {
        name: 'externalButton.show',
        fn: () => {
          const params = {
            rt_ext: {
              key: '',
              txt: '',
              icon: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2',
              red_state: '1',
            },
            config: [
              {
                key: '1',
                txt: '消息通知',
                icon: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2', // 特殊icon: search-bar 。（见其他说明）
                red_state: '', // 红点状态  0/1  不展示/展示  默认不展示
              },
              {
                key: '2',
                txt: '阿斯顿发',
                icon: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2', // 特殊icon: search-bar 。（见其他说明）
                red_state: '1', // 红点状态  0/1  不展示/展示  默认不展示
              },
              {
                key: '3',
                txt: '啊阿斯顿发',
                icon: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2', // 特殊icon: search-bar 。（见其他说明）
                red_state: '1', // 红点状态  0/1  不展示/展示  默认不展示
              },
            ],
          };

          WBAPP.externalButton.show(params);
        },
      },
      {
        name: 'externalButton.show | 形状',
        fn: () => {
          const params = {
            rt_ext: {
              key: '',
              txt: '',
              icon:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497444723794&di=6734efbac8cb09dc02dd5de8bc0a3964&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F79%2F11%2F83x58PICYR3_1024.jpg',
              red_state: '1',
            },
            config: [
              {
                key: '1',
                txt: '消息通知',
                icon:
                  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497444723794&di=6734efbac8cb09dc02dd5de8bc0a3964&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F79%2F11%2F83x58PICYR3_1024.jpg', // 特殊icon: search-bar 。（见其他说明）
                red_state: '', // 红点状态  0/1  不展示/展示  默认不展示
              },
              {
                key: '2',
                txt: '阿斯顿发',
                icon: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2', // 特殊icon: search-bar 。（见其他说明）
                red_state: '1', // 红点状态  0/1  不展示/展示  默认不展示
              },
              {
                key: '3',
                txt: '啊阿斯顿发',
                icon: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2', // 特殊icon: search-bar 。（见其他说明）
                red_state: '1', // 红点状态  0/1  不展示/展示  默认不展示
              },
            ],
          };

          WBAPP.externalButton.show(params);
        },
      },
      {
        name: 'externalButton.show | 文本',
        fn: () => {
          const params = {
            rt_ext: {
              key: '',
              txt: '文本',
              icon: '',
              red_state: '',
            },
            config: [
              {
                key: '1',
                txt: '消息通知',
                red_state: '', // 红点状态  0/1  不展示/展示  默认不展示
              },
              {
                key: '2',
                txt: '阿斯顿发',
                red_state: '1', // 红点状态  0/1  不展示/展示  默认不展示
              },
              {
                key: '3',
                txt: '啊阿斯顿发',
                red_state: '1', // 红点状态  0/1  不展示/展示  默认不展示
              },
            ],
          };

          WBAPP.externalButton.show(params);
        },
      },
      {
        name: 'externalButton.show | 只有扩展按钮',
        fn: () => {
          const params = {
            rt_ext: {
              key: '',
              txt: '文本',
              icon: '',
              red_state: '',
            },
          };

          WBAPP.externalButton.show(params);
        },
      },
      {
        name: 'externalButton.hide | 业务组件卸载必须调用',
        fn: () => {
          WBAPP.externalButton.hide();
        },
      },
      {
        name: 'externalButton.setHandle',
        fn: () => {
          WBAPP.externalButton.setHandle(e => {
            WBAPP.alert({ message: JSON.stringify(e) });
          });
        },
      },
      {
        name: 'externalButton.getHandle',
        fn: () => {
          const handle = WBAPP.externalButton.getHandle();
          WBAPP.alert({ message: String(handle) });
        },
      },
      {
        name: 'externalButton.removeHandle',
        fn: () => {
          const handle = WBAPP.externalButton.removeHandle();
        },
      },
    ],
  },
  {
    name: '设置状态栏',
    apis: [
      {
        name: 'WBAPP.setBarStatus dark-content',
        fn: () => {
          WBAPP.setBarStatus('dark-content', '#e72707');
        },
      },
      {
        name: 'WBAPP.setBarStatus light-content',
        fn: () => {
          WBAPP.setBarStatus('light-content', '#e72707');
        },
      },
      {
        name: 'WBAPP.setBarStatus default',
        fn: () => {
          WBAPP.setBarStatus('default', '#e72707');
        },
      },
    ],
  },
];
