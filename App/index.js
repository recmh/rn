'use strict';

import React from 'react';
import {AppRegistry} from 'react-native';

import WBAPPDemo from './Examples/WBAPPDemo/demo';
import HelloWorld from './Examples/HelloWorld/HelloWorld';
import List from './Examples/List/List';
import Item from './Examples/List/Item';

// import InitialParamsDemo from './Examples/SingleDemo/InitialParamsDemo';
// import LocaltionDemo from './Examples/SingleDemo/LocaltionDemo';
// import ShareDemo from './Examples/SingleDemo/ShareDemo';
import PayDemo from './Examples/SingleDemo/PayDemo';
import LoginDemo from './Examples/SingleDemo/LoginDemo';
import UserinfoDemo from './Examples/SingleDemo/UserinfoDemo';
import PageTransDemo from './Examples/SingleDemo/PageTransDemo';
import LoadDataDemo from './Examples/SingleDemo/LoadDataDemo';
import GobackDemo from './Examples/SingleDemo/GobackDemo';
import ChangeViewDemo from './Examples/SingleDemo/ChangeViewDemo';
// import SetWeblogDemo from  './Examples/SingleDemo/SetWeblogDemo';
import VoiceDemo from './Examples/SingleDemo/VoiceDemo';
import ToastDemo from './Examples/SingleDemo/ToastDemo';
import DialogDemo from './Examples/SingleDemo/DialogDemo';
import LoadingDemo from './Examples/SingleDemo/LoadingDemo';
import SwiperDemo from './Examples/SingleDemo/SwiperDemo';
import RequestAndroidDemo from './Examples/SingleDemo/RequestAndroidDemo';
import CountdownButtonDemo from './Examples/SingleDemo/CountdownButtonDemo';
import CheckBoxButtonDemo from './Examples/SingleDemo/CheckBoxButtonDemo';
import BottomButtonDemo from './Examples/SingleDemo/BottomButtonDemo';
import HotKeywordTagDemo from './Examples/SingleDemo/HotKeywordTagDemo';
import CountingTextInputDemo from './Examples/SingleDemo/CountingTextInputDemo';
import GlobalIndex from './globalIndex';
// 打开注释，查看对应 Demo
let App;
// App = HelloWorld;
App = WBAPPDemo;
App = GlobalIndex;
// App = List;
// App = Item;

// 单个demo
// App = InitialParamsDemo;
// App = LocaltionDemo;
// App = ShareDemo;
// App = PayDemo;
// App = LoginDemo;
// App = UserinfoDemo;
// App = PageTransDemo;
// App = LoadDataDemo;
// App = GobackDemo;
// App = ChangeViewDemo;
// App = SetWeblogDemo;
// App = VoiceDemo;
// App = ToastDemo;
// App = DialogDemo;
// App = LoadingDemo;
// App = SwiperDemo;
// App = RequestAndroidDemo;
// App = CountdownButtonDemo;
// App = CheckBoxButtonDemo;
// App = BottomButtonDemo;
//  App = HotKeywordTagDemo;
//  App = CountingTextInputDemo;

AppRegistry.registerComponent('Wuba', () => App);
