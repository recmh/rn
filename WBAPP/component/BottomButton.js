/*
* @flow
*/
import React, {PropTypes, PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const styles = {
  container: {
    flexDirection: 'row',
    height: 75.2, //100px
  },
  info: {
    wrapper: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      alignItems: 'center',
      paddingLeft: 25,
      flex: 2
    },
    normalText: {
      color: '#333',
      fontSize: 22.5
    },
    highlightText: {
      color: '#FF552E',
      fontSize: 22.5
    },
  },
  button: {
    wrapper: {
      backgroundColor: '#FF552E',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    text: {
      color: '#FFF',
      fontSize: 22.5
    }
  }
};

export default class BottomButton extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    btnTitle: PropTypes.string.isRequired,
    infoTextNormalStyle: PropTypes.object,
    infoTextHighlightStyle: PropTypes.object
  };

  render() {
    let _containerStyle = this.props.containerStyle || [styles.container, this.props.height && {height: this.props.height}];

    let infoTextNormalStyle = this.props.infoTextNormalStyle || styles.info.normalText;
    let infoTextHighlightStyle = this.props.infoTextHighlightStyle || styles.info.highlightText;

    let infoWrapperStyle = this.props.infoWrapperStyle || styles.info.wrapper;
    let btnWrapperStyle = this.props.btnWrapperStyle || styles.button.wrapper;

    return (
      <View style={_containerStyle}>
        <View style={infoWrapperStyle}>
          <Text style={infoTextNormalStyle}>{this.props.infoLeftText}</Text>
          <Text style={infoTextHighlightStyle}>{this.props.infoCenterText}</Text>
          <Text style={infoTextNormalStyle}>{this.props.infoRightText}</Text>
        </View>
        <TouchableOpacity activeOpacity={1} style={btnWrapperStyle} onPress={this.props.onPress}>
          <Text numberOfLines={1} style={styles.button.text}>{this.props.btnTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
