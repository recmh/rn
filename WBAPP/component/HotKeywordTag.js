/*
* @flow
*/
import React, {PropTypes, PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const styles = {
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: 2,
    height: 35
  },
  row: {
    flexDirection: 'row',
  },

  label: {
    wrapper: {
      width: 20,
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
      backgroundColor: '#FF552E',
      justifyContent: 'center'
    },
    text: {
      color: '#FFF',
      textAlign: 'center',
    },
    roundBorder: {
      borderRadius: 2
    }
  },

  title: {
    wrapper: {
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: 'center'
    },
    border: {
      borderColor: '#FF552E',
      borderWidth: StyleSheet.hairlineWidth,
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2
    },
    highlightText: {
      color: '#FF552E',
    },
    normalText: {
      color: '#666',
    }
  }
};

export default class HotKeywordTag extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let labelElement = null;
    if (this.props.label) {
      let wrapper = styles.label.wrapper;
      if (this.props.highlightColor) {
        wrapper = [wrapper, {backgroundColor: this.props.highlightColor}];
      }
      labelElement = <View style={wrapper}>
        <Text style={styles.label.text}>{this.props.label}</Text>
      </View>;
    }

    let showBorder = null;
    if (this.props.showBorder) {
      showBorder = styles.title.border;
      if (this.props.highlightColor) {
        showBorder = [showBorder, {borderColor: this.props.highlightColor}];
      }
      if (!this.props.label) {
        showBorder = [showBorder, styles.label.roundBorder];
      }
    }

    let titleStyle = styles.title.normalText;
    if (this.props.highlightText) {
      titleStyle = styles.title.highlightText;
    }

    if (this.props.highlightColor) {
      titleStyle = [titleStyle, {color: this.props.highlightColor}];
    }
    if (this.props.titleStyle) {
      titleStyle = this.props.titleStyle;
    }

    return (
      <TouchableOpacity activeOpacity={this.props.activeOpacity||1} onPress={this.props.onPress} style={[styles.row, styles.container]}>
        {labelElement}
        <View style={[styles.row, styles.title.wrapper, showBorder]}>
          <Text style={[titleStyle]}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
