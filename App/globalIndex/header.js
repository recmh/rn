import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import styles from './css/header';

const go = (url) => {
    alert('go ' + url);
}

export default class Header extends Component {

    static propTypes = {
        city: PropTypes.string,
        searchPlaceholder: PropTypes.string,
        postUrl: PropTypes.string,
        mineUrl: PropTypes.string
    }

    static defaultProps = {
        city: '',
        searchPlaceholder: '搜索当地华人服务',
        postUrl: '',
        mineUrl: ''
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <Image style={styles.logo} source={{ uri: 'https://gp.58cdn.com.cn/global/common/logo_white.png' }} />
                <Text style={styles.city} numberOfLines={1}>{this.props.city}</Text>
                <TouchableOpacity style={styles.search} onPress={this.props.onSearch}>
                    <Image style={styles.serchIco} source={{ uri: 'https://gp.58cdn.com.cn/global/common/search_i.png' }} />
                    <Text style={styles.serchText}>{this.props.searchPlaceholder}</Text>
                </TouchableOpacity>
                <Text style={styles.opt} onPress={((e) => { go(this.props.postUrl) }).bind(this)}>发布</Text>
                <Text style={styles.separate}>|</Text>
                <Text style={styles.opt} onPress={((e) => { go(this.props.mineUrl) }).bind(this)}>我的</Text>
            </View>
        );
    }
}