import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native'

import  React, {Component} from 'react';

class DeleteInputAndr extends Component {

  constructor(props) {
    super(props);
    let imgShow = this.props.value ? true : false;
    let text = this.props.value || "";
    this.state = {
      text,
      imgShow,
    }
  }

  blur() {
    this.refs.deleteInput.blur();
  }

  clear (){
    this.refs.deleteInput.clear();
  }

  focus(){
    this.refs.deleteInput.focus();
  }

  isFocused(){
    return this.refs.deleteInput.isFocused();
  }

  measure(...args){
    this.refs.deleteInput.measure(...args)
  }

  measureLayout(...args){
    this.refs.deleteInput.measureLayout(...args)
  }



  componentWillReceiveProps(nextProps) {

    if(this.props.value !== nextProps.value){
      this.setState({
        text: nextProps.value,
      })
    }
  }

  setImgShow(clearButtonMode, whileEditing) {

    if (!this.state.text) {
      this.setState({
        imgShow: false
      });

      return
    }

    if (clearButtonMode === 'always') {
      this.setState({
        imgShow: true
      })
    } else if (clearButtonMode === 'while-editing') {
      this.setState({
        imgShow: whileEditing
      })
    } else if (clearButtonMode === 'unless-editing') {
      this.setState({
        imgShow: !whileEditing
      })
    }
  }

  render() {
    const {
      style = styles.defaultTextInput,
      clearButtonMode = 'always',
      onChangeText,
      onFocus,
      onEndEditing,
      onBlur,
      wrapperStyle,
      ...rest
    } = this.props;

    if (clearButtonMode === 'nerver') {
      return (
        <TextInput ref="deleteInput" {...this.props}/>
      )
    }

    let inputHeight =  style.height || 40;

    let wrapperHeight =  wrapperStyle.height ? wrapperStyle.height : inputHeight
    let imgSize = inputHeight * 0.4;

    return (
      <View ref="wrapper" style={[{height:inputHeight,flex:1},wrapperStyle]}>
        <TextInput
          style={[styles.defaultTextInput,style]}
          value={this.state.text}
          onChangeText={(text)=>{
            this.setImgShow.call(this,clearButtonMode,true);

            onChangeText && onChangeText(text);
          }}
          onFocus={()=>{

            this.setImgShow.call(this,clearButtonMode,true);
            onFocus && onFocus();

          }}
          onBlur={()=>{
            onBlur && onBlur();
            }
          }
          onEndEditing={()=>{

            this.setImgShow.call(this,clearButtonMode,false);

            onEndEditing && onEndEditing();

          }}
          ref={"deleteInput"}
          {...rest}
        />

        <TouchableHighlight
          style={{justifyContent:'center',alignItems:'center',position:'absolute',right:0,top:0,width:inputHeight,height:inputHeight,}}
          onPress={()=>{
            this.setImgShow.call(this,clearButtonMode,false);
            onChangeText('');
          }}>
          <Image
            style={{width:imgSize,height:imgSize}}
            source={require('./textinput_clear_icon.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}


export let DeleteInput = Platform.OS === 'ios' ? TextInput : DeleteInputAndr;



const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1
  },
  defaultTextInput: {
    height: 40,
    flex: 1
  },
});
