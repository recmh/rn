import { StyleSheet } from 'react-native';
import base from './base';

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        height:45,
        backgroundColor:'transparent',
        position:'absolute',
        left:0,
        top:0,
        right:0,
        zIndex:999,
        overflow:'hidden'
    },
    logo:{
        width:20,
        height:18.5,
        marginLeft:17.5
    },
    city:{
        ...base.font,
        flexDirection:'row',
        marginLeft:5,
        width:45
    },
    search:{
        flex:1,
        marginLeft:15,
        marginRight:15,
        height:32,
        backgroundColor:'rgba(255,255,255,.3)',
        borderRadius:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    serchIco:{
        marginRight:6.5,
        width:13,
        height:13
    },
    serchText:{
        ...base.font,
        fontSize:12,
        color:'rgba(255,255,255,.8)'
    },
    opt:{
        ...base.font,
        paddingLeft:9,
        paddingRight:9
    },
    separate:{
        ...base.font,
        color:'rgba(255,255,255,.3)'
    }
});

export default styles;