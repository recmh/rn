/*
* @flow
*/
import React, {PropTypes, PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const styles = {
  bg: {
    base: {
      width: 143,
      height: 53,
      borderRadius: 1.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    normal: {
      backgroundColor: '#F7F7F7',
    },
    checked: {
      backgroundColor: '#FFF7F5'
    },
  },
  text: {
    normal: {
      fontSize: 18,
      color: '#333',
    },
    checked: {
      fontSize: 18,
      color: '#FF552E'
    },
  },
  triangle: {
    base: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderRightWidth: 22,
      borderTopWidth: 22,
      borderRightColor: 'transparent'
      // ,borderTopColor: '#FF552E'
    },
    corner: {
      transform: [
        {rotate: '180deg'}
      ]
    },
    position: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    bgColor: {
      borderTopColor: '#FF552E'
    }
  },
  correct: {
    base: {
      width: 12,
      height: 6,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 2,
      borderBottomWidth: 2,
      borderLeftColor: '#FFF',
      borderBottomColor: '#FFF',
      transform: [
        {rotate: '135deg'}
      ]
    },
    position: {
      position: 'absolute',
      zIndex:100,
      top: -16.5,
      right: -13.5
    }
  },

};

export default class CheckBoxButton extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string.isRequired,
    titleNormalStyle: PropTypes.object,
    titleCheckStyle: PropTypes.object,
    titleLines: PropTypes.number,
  };

  render() {
    let _bgStyle = this.props.bgNormalStyle || [styles.bg.base, styles.bg.normal];
    let _titleStyle = this.props.titleNormalStyle || styles.text.normal;
    let _triangleStyle = null;

    if (this.props.checked) {
      _bgStyle = this.props.bgCheckStyle || [styles.bg.base, styles.bg.checked];
      _titleStyle = this.props.titleCheckStyle || styles.text.checked;
      _triangleStyle = [styles.triangle.base, styles.triangle.corner, styles.triangle.position,
        {borderTopColor: _titleStyle.color || styles.triangle.bgColor.borderTopColor}];
    }

    let _titleLines = 1;
    if (this.props.titleLines) {
      _titleLines = this.props.titleLines;
    }

    return (
      <View>
        <View style={[styles.correct.base, styles.correct.position]}/>
        <TouchableOpacity activeOpacity={1} style={_bgStyle} onPress={this.props.onPress || null}>
          <Text numberOfLines={_titleLines} style={_titleStyle}>{this.props.title}</Text>
        </TouchableOpacity>
        {this.props.checked ?
          <View style={_triangleStyle}>
            <View style={[styles.correct.base, styles.correct.position]}/>
          </View> : null}
      </View>
    );
  }
}
