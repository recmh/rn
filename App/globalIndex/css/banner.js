import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#ffffff',
    },
    slide:{
        flex: 1
    },
    slideImg:{
        height:'100%',
        width:'100%'
    },
    pagination:{
        height:16,
        bottom:10
    },
    dot:{
        marginLeft:5,
        marginRight:5,
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4
    },
    activeDot:{
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#ffffff',
        width: 8,
        height: 8,
        borderRadius: 4
    }
});

export default styles;