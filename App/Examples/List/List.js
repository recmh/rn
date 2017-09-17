import React, { Component } from 'react';
import { FlatList } from 'react-native';

import fetchUrl from './fetchUrl';
// import Item from './Item';
import Item from './ItemForTest';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetchUrl(
      'https://www.easy-mock.com/mock/590aad5c7a878d73716ec616/example_1493871955959_1493871964296/flatlist',
      {
        // credentials: 'include'
      },
    )
      .then(json => {
        this.setState({ list: this.state.list.concat(json.list) });
      })
      .catch(e => console.error(e));
  }

  renderItem = ({ item, index }) => {
    return <Item item={item} key={item.key} index={index} />;
  };

  getItemLayout = (data, index) => {
    return {
      length: 180 / 2,
      offset: 180 / 2 * index,
      index,
    };
  };

  onEndReached = () => {
    fetchUrl(
      'https://www.easy-mock.com/mock/590aad5c7a878d73716ec616/example_1493871955959_1493871964296/flatlist',
    )
      .then(json => {
        this.setState({ list: this.state.list.concat(json.list) });
      })
      .catch(e => console.error(e));
  };

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={this.renderItem}
        getItemLayout={this.getItemLayout}
        onEndReached={this.onEndReached}
      />
    );
  }
}
