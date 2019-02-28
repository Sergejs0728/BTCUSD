import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet } from 'react-native';
import { computed, observable } from 'mobx';
import { observer } from 'mobx-react/native';

import styles from '../styles'

class ListStore {
  @observable list = [
    { title: 'USD jumps up', content: 'Proin maximus porttitor mi quis elementum. Sed nec leo ut quam elementum dapibus...' },
    { title: 'USD jumps up', content: 'Proin maximus porttitor mi quis elementum. Sed nec leo ut quam elementum dapibus...' },
    { title: 'USD jumps up', content: 'Proin maximus porttitor mi quis elementum. Sed nec leo ut quam elementum dapibus...' },
    { title: 'USD jumps up', content: 'Proin maximus porttitor mi quis elementum. Sed nec leo ut quam elementum dapibus...' },
  ];

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  @computed get dataSource() { return this.ds.cloneWithRows(this.list); }
 
}

const listStore = new ListStore();

@observer class Market_list extends Component {
  _renderItem(row) { 
    
    return(
      <View style={styles.market_box}>
        <Text style={styles.market_box_title}>{row.title}</Text>
        <Text style={styles.market_box_content}>{row.content}</Text>
      </View>
    )
  }

  render() {
    
    return ( 
      <ListView
        dataSource={listStore.dataSource}
        renderRow={ row => this._renderItem(row)}
        enableEmptySections={true}
      />
    );
  }
}



export default Market_list;