import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight,ScrollView,Platform } from 'react-native';
import Header from './header';
import Search from './search';
import Banner from './banner';
import Category from './category';
import Hotnews from './hotnews';
import Advert from './advert';
import Panel from './panel';

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f6f6f6',
        ...Platform.select({
            ios: {
              paddingBottom: 75,
            },
          })
    }
});

export default class GlobalIndex extends Component {

    static propTypes = {
        banerData: PropTypes.array,
        categoryData: PropTypes.array,
        hotnewData: PropTypes.array,
        advertData: PropTypes.array
    }

    static defaultProps = {
        banerData: [
            'https://gpic2.58cdn.com.cn/nowater/guoji/n_v1bj3gzr2ipv2frnmw2zva.png',
            'https://gpic2.58cdn.com.cn/nowater/guoji/n_v2acdec5a42c6443a18700af825ebc4d0f.jpg',
            'https://gpic4.58cdn.com.cn/nowater/guoji/n_v1bl2lwklrvabftid22f3q.jpg',
            'https://gpic2.58cdn.com.cn/nowater/guoji/n_v1bj3gzr2ipv2frnmw2zva.png'
        ],
        categoryData: [
            {
                name: '房产投资',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic4.58cdn.com.cn/nowater/guoji/n_v1bl2lwkkiartfqaikhvfa.png'
            },
            {
                name: '租房合租',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic4.58cdn.com.cn/nowater/guoji/n_v1bl2lwkkiartfqaikhvfa.png'
            },
            {
                name: '留学服务',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic2.58cdn.com.cn/nowater/guoji/n_v1bl2lwwnpmaaftefef53a.png'
            },
            {
                name: '移民服务',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic3.58cdn.com.cn/nowater/guoji/n_v1bkuymc7gmaafsg3ya4ka.png'
            },
            {
                name: '本地招聘',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic3.58cdn.com.cn/nowater/guoji/n_v1bkuymcyvmeaftlvw7fwq.png'
            },
            {
                name: '海外招聘',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic2.58cdn.com.cn/nowater/guoji/n_v1bkuyfvk6meafsxnkduia.png'
            },
            {
                name: '自驾租车',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic3.58cdn.com.cn/nowater/guoji/n_v1bj3gzr5mmeaft6dze46q.png'
            },
            {
                name: '旅游酒店',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic4.58cdn.com.cn/nowater/guoji/n_v1bkuymc6rmeafsn4e4qna.png'
            },
            {
                name: '当地美食',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic3.58cdn.com.cn/nowater/guoji/n_v1bl2lwkd7miaftnjo3uoq.png'
            },
            {
                name: '二手车辆',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic2.58cdn.com.cn/nowater/guoji/n_v1bl2lwwo5miaftf4e7iya.png'
            },
            {
                name: '二手家具',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic2.58cdn.com.cn/nowater/guoji/n_v1bl2lwwo5miaftf4e7iya.png'
            },
            {
                name: '海外社群',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic1.58cdn.com.cn/nowater/guoji/n_v2c0b9eba65daa4fe4b3ff354bbf009ec0.png'
            },
            {
                name: '全部服务',
                url: '//gm.58.com/j-glnewyork/glchushou/',
                img: 'http://gpic4.58cdn.com.cn/nowater/guoji/n_v1bl2lwkesmmaftcxy7vma.png'
            }
        ],
        hotnewData: [
            {
                url: '//gm.58.com/glus-news/glstudyabroad/31235331028482.html?local=glnewyork',
                value: '您知道美国人寿保险的七大功能吗？您知道美国人寿保险的七大功能吗？'
            },
            {
                url: '//gm.58.com/glus-news/glstudyabroad/31235331028482.html?local=glnewyork',
                value: '美国人寿保险的问题答疑'
            },
            {
                url: '//gm.58.com/glus-news/glstudyabroad/31235331028482.html?local=glnewyork',
                value: '全球化思维下如何布局子女教育规划'
            },
            {
                url: '//gm.58.com/glus-news/glstudyabroad/31235331028482.html?local=glnewyork',
                value: '留学生十年就业大数据 海归就业优劣势明显'
            },
            {
                url: '//gm.58.com/glus-news/glstudyabroad/31235331028482.html?local=glnewyork',
                value: '不得不知的美国房产的那些事'
            }
        ],
        advertData: [
            {
                img: 'https://gpic3.58cdn.com.cn/nowater/guoji/n_v27769a8a376754d658f1bda8f8a6901fe.jpg',
                url: '//gpic3.58cdn.com.cn/nowater/guoji/n_v27769a8a376754d658f1bda8f8a6901fe.jpg'
            },
            {
                img: 'https://gpic3.58cdn.com.cn/nowater/guoji/n_v27769a8a376754d658f1bda8f8a6901fe.jpg',
                url: '//gpic3.58cdn.com.cn/nowater/guoji/n_v27769a8a376754d658f1bda8f8a6901fe.jpg'
            }, {
                img: 'https://gpic3.58cdn.com.cn/nowater/guoji/n_v27769a8a376754d658f1bda8f8a6901fe.jpg',
                url: '//gpic3.58cdn.com.cn/nowater/guoji/n_v27769a8a376754d658f1bda8f8a6901fe.jpg'
            }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
    }

    show() {
        this.setState({show:true});
    }

    cancel() {
        this.setState({show:false})
    }

    render() {
        const props = this.props;
        return (
            <View style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header postUrl={'post'} postMine={'mine'} city={'洛杉矶'} onSearch={this.show.bind(this)}/>
                <Banner data={props.banerData} />
                <Category data={props.categoryData} pageSize={8} />
                <Hotnews data={props.hotnewData} pageSize={2} />
                <Advert data={props.advertData} style={{marginTop:10}}/>
                <Panel title={'置业租房'} top={[
                    {name:'自驾游',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bl2lwkmebvtfrxlvwv5q.jpg'},
                    {name:'跟团游',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bkuyfvpztybftqufvfvq.jpg'}
                    ]} cates={[
                        {url:'',name:'售房'},
                        {url:'',name:'租房'},
                        {url:'',name:'商业房产'},
                        {url:'',name:'合租房'},
                        {url:'',name:'地产经纪'},
                        {url:'',name:'求租求购'}
                    ]}/>
                    <Panel title={'出行游玩'} top={[
                    {name:'本地留学',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bl2lwkmebvtfrxlvwv5q.jpg'},
                    {name:'语言培训',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bkuyfvpztybftqufvfvq.jpg'},
                    {name:'美国驾考',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bl2lwkmebvtfrxlvwv5q.jpg'}
                    ]} cates={[
                        {url:'',name:'售房'},
                        {url:'',name:'租房'},
                        {url:'',name:'商业房产'},
                        {url:'',name:'合租房'},
                        {url:'',name:'地产经纪'},
                        {url:'',name:'求租求购'}
                    ]}/>
                    <Panel title={'出行游玩'} top={[
                    {name:'当地美食',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bl2lwkmebvtfrxlvwv5q.jpg'},
                    {name:'医疗诊所',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bkuyfvpztybftqufvfvq.jpg'},
                    {name:'快递物流',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bl2lwkmebvtfrxlvwv5q.jpg'},
                    {name:'月子中心',url:'',img:'https://gpic1.58cdn.com.cn/nowater/guoji/n_v1bkuyfvpztybftqufvfvq.jpg'}
                    ]} cates={[
                        {url:'',name:'售房'},
                        {url:'',name:'租房'},
                        {url:'',name:'商业房产'},
                        {url:'',name:'合租房'},
                        {url:'',name:'地产经纪'},
                        {url:'',name:'求租求购'}
                    ]}/>
                    <Panel title={'出行游玩'} cates={[
                        {url:'',name:'售房'},
                        {url:'',name:'租房'},
                        {url:'',name:'商业房产'},
                        {url:'',name:'合租房'},
                        {url:'',name:'地产经纪'},
                        {url:'',name:'求租求购'}
                    ]}/>
            </ScrollView>
            {this.state.show &&
            <Search placeholder={this.props.searchPlaceholder} onCancel={this.cancel.bind(this)}/>
            }
            </View>
        );
    }

}