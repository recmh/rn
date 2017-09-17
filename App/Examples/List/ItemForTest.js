import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';

// import WBAPP from '../../WBAPP';

export default class Item extends PureComponent {
  static defaultProps = {
    item: {
      key: 1,
      title: '我是标题',
      text: '我是内容',
      img: 'http://img.58cdn.com.cn/logo/58/252_84/logo-o.png?v=2',
    },
    index: 0,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    // const params = {
    //   "pagetype":"link", // /^childcate|list|detail|link|publish|backreload|mypublish|usercenterbusiness$/
    //   "title":"58同城",  //   title
    //   "url": "http://stocks.sina.cn/us/?vt=4&code=wuba",   //  跳转地址
    //   "hideBar": 0
    // };
    //
    // WBAPP.loadPage(params);
  };

  render() {
    const { item, index } = this.props;
    const { title, key, text } = item;
    const img = item.img.replace(/^http|https/, 'https');

    console.log('我在 WubaRN 中打 log');

    return (
      <TouchableHighlight onPress={this.handleClick}>
        <View style={[styles.box]}>
          <View style={styles.descriptionBox}>
            <Text
              allowFontScaling={false}
              numberOfLines={2}
              style={styles.title}
            >
              {index + '||' + text}
            </Text>
            <View style={styles.remarkBox}>
              <Text allowFontScaling={false} style={styles.time}>
                {key + ' '}
              </Text>
              <View style={styles.pageView}>
                <Image style={styles.icon} source={{ uri: img }} />
                <Text allowFontScaling={false} style={styles.pageViewText}>
                  {index + ' '}
                </Text>
              </View>
            </View>
          </View>
          <Image style={styles.image} source={{ uri: img }} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 180 / 2,
    paddingLeft: 30 / 2,
    paddingRight: 30 / 2,
    paddingTop: 20 / 2,
    paddingBottom: 20 / 2,

    overflow: 'hidden',
  },
  descriptionBox: {
    flex: 1,
    height: 140 / 2,
    justifyContent: 'space-between',
  },
  title: {
    marginRight: 30 / 2,
    marginTop: -2,
    fontSize: 34 / 2,
    color: 'red',
    ...Platform.select({
      ios: {
        height: 80 / 2,
        lineHeight: 40 / 2,
      },
      android: {
        height: 110 / 2,
        lineHeight: 44 / 2,
      },
    }),
  },
  remarkBox: {
    marginBottom: -3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hot: {
    fontSize: 20 / 2,
    color: '#FF552E',
  },
  time: {
    marginRight: 20 / 2,
    height: 30 / 2,
    fontSize: 22 / 2,
    color: '#aaa',
  },
  image: {
    backgroundColor: '#f5f5f5',
    width: 230 / 2,
    height: 140 / 2,
  },
  pageView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20 / 2,
    height: 30 / 2,
  },
  icon: {
    width: 22 / 2,
    height: 14 / 2,
    marginRight: 10 / 2,
  },
  pageViewText: {
    fontSize: 20 / 2,
    color: '#aaa',
  },
});
