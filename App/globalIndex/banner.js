import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Swiper } from '../../WBAPP';
import styles from './css/banner';

export default class Banner extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    render() {
        const data = this.props.data;
        return data.length ? (
            <Swiper style={styles.wrapper}
                dot={<View style={styles.dot}></View>}
                activeDot={<View style={styles.activeDot}></View>}
                height={160}
                autoplay={true}
                autoplayTimeout={5}
                paginationStyle={styles.pagination}>
                {data.map((url, i) =>
                    <View style={styles.slide} key={i}>
                        <Image style={styles.slideImg} source={{ uri: url }} />
                    </View>
                )}
            </Swiper>
        ) : null;
    }
}