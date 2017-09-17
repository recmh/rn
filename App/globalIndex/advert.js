import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Swiper } from '../../WBAPP';
import styles from './css/banner';

const advertstyle = {
    container: {
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    pagination:{
        height:5,
        bottom:5.5
    },
    dot:{
        marginLeft:3,
        marginRight:3,
        backgroundColor: '#ed6746',
        opacity:0.2,
        width: 10,
        height: 1.5
    },
    activeDot:{
        opacity:1
    }
};

let { width } = Dimensions.get('window');

export default class Advert extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    render() {
        const data = this.props.data;
        return data.length ? (
            <View style={[advertstyle.container,this.props.style]}>
                <Swiper
                    height={54}
                    width={width - advertstyle.container.paddingLeft - advertstyle.container.paddingRight}
                    paginationStyle={advertstyle.pagination}
                    dot={<View style={advertstyle.dot} />}
                    activeDot={<View style={{...advertstyle.dot,...advertstyle.activeDot}} />}>
                    {data.map((temp, i) =>
                        <TouchableOpacity style={styles.slide} key={i} onPress={(e)=>{alert(temp.url)}}>
                            <Image style={styles.slideImg} source={{ uri: temp.img }} />
                        </TouchableOpacity>
                    )}
                </Swiper>
            </View>
        ) : null;
    }
}