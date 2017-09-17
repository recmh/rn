/*
* @flow
*/
import React, {PropTypes,PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types'; //for react native 0.47.0

export default class CountdownButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: this.props.timerCount || 60,
      timerTitle: this.props.timerTitle || '获取验证码',
      counting: false
    };
    this._shouldStartCounting = this._shouldStartCounting.bind(this);
    this._countDownAction = this._countDownAction.bind(this);
  }

  static propTypes = {
    style: PropTypes.object,
    textStyle: Text.propTypes.style,
    onClick: PropTypes.func,
    disableColor: PropTypes.string,
    timerTitle: PropTypes.string,
    enable: PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number])
  };

  _countDownAction() {
    const codeTime = this.state.timerCount;
    this.interval = setInterval(() => {
      const timer = this.state.timerCount - 1;
      if (timer === 0) {
        this.interval && clearInterval(this.interval);
        this.setState({
          timerCount: codeTime,
          timerTitle: this.props.timerTitle || '获取验证码',
          counting: false
        });
      } else {
        __DEV__ && console.log('---- timer ', timer);
        this.setState({
          counting: true,
          timerCount: timer,
          timerTitle: `${timer}秒`
        });
      }
    }, 1000);
  }

  _shouldStartCounting(shouldStart) {
    if (shouldStart && !this.state.counting) {
      this._countDownAction();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {style, textStyle, enable, disableColor} = this.props;
    const {counting, timerTitle} = this.state;
    return (
      <TouchableOpacity style={[{width: 100, height: 30, justifyContent: 'center', alignItems: 'center'}, style]} activeOpacity={counting ? 1 : 0.7} onPress={() => {
        this.props.onClick(this._shouldStartCounting);
      }}>
        <Text style={[{fontSize: 16}, textStyle, {color: ((!counting && enable) ? textStyle.color : disableColor || 'gray')}]}>{timerTitle}</Text>
      </TouchableOpacity>
    );
  }
}
