import React from 'react';
import {NativeModules, Platform} from 'react-native';
import checker from '../util/checker';
import processColor from 'processColor';


const textColorList = ['default', 'light-content', 'dark-content'];

export function setBarStatus(textColor = 'default', bgColor = '#fff') {

    let error = checker(arguments, ['s', 's'], 'setBarStatus');

    if (error === 'error') {
        return error;
    }

    if (textColorList.indexOf(textColor) < 0) {
        textColor = 'default';
    }

    bgColor = processColor(bgColor);

    if (Platform.OS === 'android') {
      NativeModules.WBStatusBar && NativeModules.WBStatusBar.setStatusBarStyle &&  NativeModules.WBStatusBar.setStatusBarStyle(textColor, bgColor)
    }
    else {
      NativeModules.WBStatusBar && NativeModules.WBStatusBar.setStatusBarStyle && NativeModules.WBRCTCarrierViewController.setStatusBarStyle(textColor)
    }
}