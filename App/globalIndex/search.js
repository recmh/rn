import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet,ScrollView,Dimensions,Image,TextInput } from 'react-native';
import base from './css/base';

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:1000,
        backgroundColor:'#ffffff',
        left:0,
        top:0,
        width:width,
        height:height
    },
    inputContainer:{
        paddingTop:6,
        paddingBottom:6,
        paddingLeft:15,
        borderBottomWidth:1,
        borderBottomColor:'#e5e5e5',
        borderStyle:'solid',
        backgroundColor:'#f6f6f6',
        flexDirection:'row',
        alignItems:'center'
    },
    inputwrap:{
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#d5d5d5',
        borderRadius:3,
        paddingLeft:10,
        backgroundColor:'#ffffff',
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        ...base.font,
        paddingTop:1,
        paddingBottom:1,
        height:32,
        alignItems:'center',
        color:'#999',
        fontSize:12,
        flex:1
    },
    clear:{
        width:27.5,
        height:32
    },
    cancel:{
        ...base.font,
        width:44,
        height:34,
        lineHeight:34,
        justifyContent: 'center',
        alignItems:'center',
        color:'#ff552e',
        textAlign:'center',
        fontSize:12
    },
    result:{}
});

export default class Search extends Component {

    static propTypes = {
        value:PropTypes.string,
        placeholder:PropTypes.string
    }

    static defaultProps = {
        value: '',
        placeholder: '搜索当地华人服务'
    }

    constructor(props) {
        super(props);
        this.state = { text: '',clear:false };
    }

    toggle() {
        this.setState((prevState) => ({
            clear: !prevState.clear
          }));

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputwrap}>
                        <TextInput style={styles.input} onFocus={this.toggle.bind(this)} onChangeText={(text)=>{this.setState({text})}} value={this.state.text}/>
                        {this.state.clear &&
                        <Image onPress style={styles.clear} source={{uri:'https://gp.58cdn.com.cn/global/index/deletebg.png'}}/>
                        }
                    </View>
                    <Text style={styles.cancel} onPress={this.props.onCancel}>取消</Text>
                </View>
                <ScrollView style={styles.result}>
                </ScrollView>
            </View>
        );
    }
}