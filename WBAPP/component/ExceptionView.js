'use strict';
import React,{Component} from 'react';
import {
  requireNativeComponent,
  PropTypes,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

const WBErrorView = requireNativeComponent('WBErrorView');


export function ExceptionView (props) {

  let exceptionStyle;

  if (Platform.OS === 'ios') {
    exceptionStyle = props.type=="1"? styles.iosfirst: styles.iosseccond
  } else {
    exceptionStyle = styles.andrException
  }
  return(
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <WBErrorView type={props.type} style={exceptionStyle}/>
    </TouchableOpacity>
  )
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iosfirst:{
    width: 174,
    height: 200,
  },
  iosseccond:{
    width: 128.5,
    height: 172,
  },
  andrException: {
    width:250,
    height:270,
  }
})
