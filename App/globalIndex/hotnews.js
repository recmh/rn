import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Swiper } from '../../WBAPP';
import base from './css/base';
import styles from './css/banner';

const hotnewsstyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5',
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        height: 60
    },
    img: {
        width: 43,
        height: 32.5
    },
    wrap: {
        flex: 1,
        marginLeft: 18
    },
    hotnews: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 3,
        height: 3,
        borderRadius: 1.5,
        marginRight: 6,
        backgroundColor: '#e0e0e0'
    },
    text: {
        ...base.font,
        lineHeight: 25,
        color: 'rgb(136,136,136)'
    }
});

function hotnewsList(data, pageSize, hotnews) {
    if (data.length === 0) return;
    let temp = data.splice(0, pageSize);
    hotnews.push(
        <View key={hotnews.length}>
            {temp.map((hot, index) =>
                <TouchableOpacity key={index} style={hotnewsstyle.hotnews} onPress={(e) => { alert(hot.url) }}>
                    <View style={hotnewsstyle.icon}></View>
                    <Text style={hotnewsstyle.text} numberOfLines={1}>{hot.value}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
    hotnewsList(data, pageSize, hotnews);
}

export default class Hotnews extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    render() {
        const data = [];
        hotnewsList(this.props.data, this.props.pageSize, data)
        return data.length ? (
            <View style={hotnewsstyle.container}>
                <TouchableOpacity style={hotnewsstyle.img} onPress={(e) => { alert(12122) }}>
                    <Image style={hotnewsstyle.img} source={{ uri: 'https://gp.58cdn.com.cn/global/index/hot_item.png' }} />
                </TouchableOpacity>
                <View style={hotnewsstyle.wrap}>
                    <Swiper style={styles.wrapper}
                        height={50}
                        width={'100%'}
                        autoplay={true}
                        autoplayTimeout={5.5}
                        showsPagination={false}
                        horizontal={false}>
                        {data}
                    </Swiper>
                </View>
            </View>
        ) : null;
    }
}