/*
* @flow
*/
import React, {PropTypes, PureComponent} from 'react';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';

const styles = {
  container: {
    base: {
      height: 200,
      borderWidth: StyleSheet.hairlineWidth,
    },
    normal: {
      borderColor: '#999',
    },
    warning: {
      borderColor: '#FF552E',
    },
  },

  limit: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'transparent',
  },

  textInput: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 5,
    textAlignVertical: 'top',
    fontSize: 14,
    ...Platform.select({
      android: {
        lineHeight: 22,
      }, ios: {
        lineHeight: 42,
      }
    })
  }
};

export default class CountingTextInput extends PureComponent {
  static defaultProps = {
    showBorder: true
  };

  static propTypes = {
    showBorder: PropTypes.bool,
    borderStyle: PropTypes.object,
    limitCount: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      count: this.props.value ? this.props.value.length : 0,
      overflow: false
    }
  }

  render() {
    let textInputStyle = styles.textInput;
    let containerStyle = [styles.container.base, this.state.overflow ? styles.container.warning : styles.container.normal];

    if (this.props.height) {
      textInputStyle = [textInputStyle, {height: this.props.height}];
      containerStyle = [containerStyle, {height: this.props.height}];
    }

    if (!this.props.showBorder) {
      containerStyle = [containerStyle, {borderWidth: 0}];
    }
    if (this.props.borderStyle) {
      containerStyle = [containerStyle, this.props.borderStyle];
    }

    return (
      <View style={containerStyle}>
        <TextInput autoCorrect={false} autoCapitalize='none' style={textInputStyle}
                   placeholder={this.props.placeholder} placeholderTextColor={this.props.placeholderTextColor || '#999'}
                   multiline={true} blurOnSubmit={true} onChangeText={this._onChangeText}
                   underlineColorAndroid='transparent' value={this.state.value}
        />
        <Text style={styles.limit}>
          {this.state.count}/{this.props.limitCount}
        </Text>
      </View>
    );
  }

  _onChangeText = (text) => {
    let inputText = text.replace("\n", "");
    if (inputText.length >= this.props.limitCount) {
      inputText = inputText.substr(0, this.props.limitCount);
      this.setState({
        value: inputText,
        count: inputText.length,
        overflow: true
      });
    } else {
      this.setState({
        value: inputText,
        count: inputText.length,
        overflow: false
      });
    }

    this.props.onChangeText(inputText);
  }
}
