import React,{Component,PropTypes} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import base from './css/base';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        marginTop:10
    },
    fontTitle:{
        ...base.font,
        fontSize:14,
        color:'#ff552e',
        fontWeight:'bold'
    },
    title:{
        height:45,
        paddingLeft:15,
        backgroundColor:'#ffffff',
        borderStyle:'solid',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        justifyContent:'center'
    },
    top:{
        borderStyle:'solid',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        flexDirection:'row'
    },
    top_2:{
        height:60,
        justifyContent:'center',
        paddingLeft:15,
        width:'50%',
        borderStyle:'solid',
        borderRightWidth:1,
        borderRightColor:'#f3f3f3',
    },
    top_img_2:{
        position:'absolute',
        right:15,
        top:10,
        width:55,
        height:50
    },
    top_3:{
        height:87,
        paddingTop:15,
        paddingLeft:15,
        width:'33.33%',
        borderStyle:'solid',
        borderRightWidth:1,
        borderRightColor:'#f3f3f3',
    },
    top_img_3:{
        position:'absolute',
        right:10,
        bottom:5,
        width:52.5,
        height:42.5
    },
    top_4:{
        height:75,
        paddingTop:15,
        justifyContent:'center',
        alignItems:'center',
        width:'25%',
        borderStyle:'solid',
        borderRightWidth:1,
        borderRightColor:'#f3f3f3',
    },
    top_img_4:{
        marginTop:10,
        width:52,
        height:27
    },
    cates:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    textwrap:{
        width:'25%',
        height:38,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#333333'
    }
});

function Title(props) {
    return (
       <TouchableOpacity style={styles.title}>
           <Text style={styles.fontTitle}>{props.children}</Text>
       </TouchableOpacity> 
    );
}

function Top(props){
    const data = props.data;
    return (
        <View style={styles.top}>
            {data.map((temp,index) => 
                <TouchableOpacity style={styles['top_'+data.length]} key={index} onPress={(e)=>{alert(temp.url)}}>
                    <Text style={{...base.font,fontWeight:'bold',color:'#000'}}>{temp.name}</Text>
                    <Image style={styles['top_img_'+data.length]} source={{uri:temp.img}}/>
                </TouchableOpacity>
            )}
        </View>
    );
}

export default class Panel extends Component {

    render() {
        const props = this.props;
        return (
            <View style={styles.container}>
                {props.title &&
                <Title>{props.title}</Title>
                }
                {props.top && 
                 <Top data={props.top}/>   
                }
                {props.cates && 
                 <View style={styles.cates}>
                   {props.cates.map((temp,index) =>
                    <TouchableOpacity style={styles.textwrap} key={index}>
                        <Text style={styles.text}>{temp.name}</Text>
                    </TouchableOpacity>
                   )} 
                </View>   
                }
            </View>
        );
    }

}