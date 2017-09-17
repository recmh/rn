import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Swiper } from '../../WBAPP';
import base from './css/base';
import styles from './css/banner';

const catestyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        flexWrap: 'wrap',
        height: 197.5,
        paddingTop: 10.5
    },
    wrap: {
        width: '25%',
        paddingTop: 10.5,
        paddingBottom: 10.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 37,
        height: 37
    },
    text: {
        ...base.font,
        fontSize: 12,
        color: '#333333',
        marginTop: 9
    },
    activeDot: {
        backgroundColor: '#ff552e'
    }
});

function cateList(data, pageSize, cates) {
    if (data.length === 0) return;
    let temp = data.splice(0, pageSize);
    cates.push(
        <View style={catestyle.container} key={cates.length}>
            {temp.map((cate, index) =>
                <TouchableOpacity style={catestyle.wrap} onPress={(e) => { alert(cate.url) }} key={index}>
                    <Image style={catestyle.img} source={{ uri: cate.img }} />
                    <Text style={catestyle.text}>{cate.name}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
    cateList(data, pageSize, cates);
}
export default class Banner extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    render() {
        const data = [];
        cateList(this.props.data, this.props.pageSize, data)
        return data.length ? (
            <Swiper style={styles.wrapper}
                height={197.5}
                paginationStyle={styles.pagination}
                dot={<View style={styles.dot} />}
                activeDot={<View style={[styles.activeDot, catestyle.activeDot]} />}>
                {data}
            </Swiper>
        ) : null;
    }
}