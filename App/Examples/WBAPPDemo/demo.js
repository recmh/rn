import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, FlatList } from 'react-native';

import { sdkContent } from './sdkContent';

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={sdkContent} renderItem={this.renderItem} />
      </View>
    );
  }

  renderItem = ({ item }) =>
    <View style={styles.row}>
      <View style={[styles.paddingLeft16, styles.nameBox]}>
        <Text>
          {item.name}
        </Text>
      </View>
      {item.apis.map((api, index, array) => {
        return (
          <TouchableOpacity
            key={index}
            style={[{ paddingLeft: 16 }, this.computeStyle(array, index)]}
            onPress={api.fn}
          >
            <Text style={styles.apiName}>
              {api.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>;

  computeStyle(array, index) {
    if (array.length - 1 !== index) {
      return {
        borderColor: '#f3f3f3',
        borderBottomWidth: 1,
      };
    }
    return null;
  }
}

const styles = {
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingBottom: 100,
      },
    }),
  },
  nameBox: {
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    height: 26,
  },
  name: {
    fontSize: 14,
    color: '#aaa',
    textAlignVertical: 'center',
  },
  paddingLeft16: {
    paddingLeft: 16,
  },
  apiName: {
    borderLeftWidth: 16,
    borderLeftColor: 'transparent',
    height: 50,
    lineHeight: 25,
    fontSize: 16,
    textAlignVertical: 'center',
  },
};
