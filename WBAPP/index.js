// 防多次点击sdk
const throttle = require('./util/throttle').throttle;
// const asyncThrottle = require('./sdk/throttle').asyncThrottle;
const asyncArea = require('./sdk/area').asyncArea;
const area = require('./sdk/area').area;
const asyncSingleSelect = require('./sdk/singleselect').asyncSingleSelect;
const singleSelect = require('./sdk/singleselect').singleSelect;
const asyncMultiunlinkSelector = require('./sdk/multiunlinkselector').asyncMultiunlinkSelector;
const multiunlinkSelector = require('./sdk/multiunlinkselector').multiunlinkSelector;
const alert = require('./sdk/dialog').alert;
const confirm = require('./sdk/dialog').confirm;

// 这些包一层 throttle 的异步连续执行会返回 undefined，现在没有很好的解决办法，先将这些接口屏蔽。
const delay = 500;

// exports.asyncArea = asyncThrottle(asyncArea,500);
exports.area = throttle(area,delay);
// exports.asyncSingleSelect = throttle(asyncSingleSelect,500,3000);
exports.singleSelect = throttle(singleSelect,delay);
// exports.asyncMultiunlinkSelector = throttle(asyncMultiunlinkSelector,500,3000);
exports.multiunlinkSelector = throttle(multiunlinkSelector,delay);
// exports.asyncAlert = require('./sdk/dialog').asyncAlert;
exports.alert = throttle(alert,delay);
// exports.asyncConfirm = require('./sdk/dialog').asyncConfirm;
exports.confirm = throttle(confirm,delay);

// sdk
exports.dialogPic = require('./sdk/dialog').confirmPic;
exports.voiceRecord = require('./sdk/voiceRecord').voiceRecord;
exports.asyncGetLocation = require('./sdk/getLocation').asyncGetLocation;
exports.getLocation = require('./sdk/getLocation').getLocation;
exports.toast = require('./sdk/toast').toast;
exports.navigator = require('./sdk/navigator').navigator;
exports.loadPage = require('./sdk/navigator').loadPage;
exports.loadReactNative = require('./sdk/navigator').loadReactNative;
exports.photoSelector = require('./sdk/photoSelector');
exports.asyncInitialParams = require('./sdk/initialParams').asyncInitialParams;
exports.initialParams = require('./sdk/initialParams').initialParams;
exports.setWebLog = require('./sdk/weblog').set;
exports.loading = require('./sdk/loading').loading;
exports.asyncCommunitySearch = require('./sdk/communitysearch').asyncCommunitySearch;
exports.communitySearch = require('./sdk/communitysearch').communitySearch;
exports.goBack = require('./sdk/back').goBack;
exports.back = require('./sdk/back').back;
exports.asyncGotoPay = require('./sdk/gotoPay').asyncGotoPay;
exports.gotoPay = require('./sdk/gotoPay').gotoPay;
exports.rootMoveTo = require('./sdk/rootTranslateY').rootMoveTo;
exports.login = require('./sdk/login').login;
exports.asyncIndustrySelector = require('./sdk/industrySelector.js').asyncIndustrySelector;
exports.industrySelector = require('./sdk/industrySelector.js').industrySelector;
exports.viewController = require('./sdk/viewController.js');
exports.share = require('./sdk/share.js').share;
exports.requestAndroid = require('./sdk/net.js').request;
exports.userinfo = require('./sdk/userinfo.js').userinfo;
exports.loadNativeData = require('./sdk/loadNativeData.js').loadNativeData;
exports.externalButton = require('./sdk/externalButton.js').externalButton;
exports.setBarStatus = require('./sdk/setBarStatus').setBarStatus;

// component
exports.DeleteInput = require('./component/DeleteInput').DeleteInput;
exports.ExceptionView = require('./component/ExceptionView').ExceptionView;
import CountdownButton from './component/CountdownButton' ;
exports.CountdownButton = CountdownButton;
import CheckBoxButton from './component/CheckBoxButton' ;
exports.CheckBoxButton = CheckBoxButton;
import BottomButton from './component/BottomButton' ;
exports.BottomButton = BottomButton;
import HotKeywordTag from './component/HotKeywordTag' ;
exports.HotKeywordTag = HotKeywordTag;
import CountingTextInput from './component/CountingTextInput' ;
exports.CountingTextInput = CountingTextInput;

// 滑动组件
import Swiper from './component/Swiper';
exports.Swiper = Swiper;

// 这是一次重要的提交
