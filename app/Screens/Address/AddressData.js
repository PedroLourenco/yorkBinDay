import React, { Component } from 'react';
import { List, ListItem } from "react-native-elements";

import {
    Text,
    View,
    FlatList
} from 'react-native';

class AddressData extends Component {
  constructor(props) {
    super(props)
  }

  renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE"
          }}
        />
      );
    };

    render() {
      const {navigation} = this.props

        return (
          <List containerStyle={{flex: 1, borderTopWidth: 0, borderBottomWidth: 0}}>
             <FlatList
              data={this.props.data}
              renderItem={({item}) => (
                <ListItem
                  titleNumberOfLines={3}
                  title={item.ShortAddress}
                  subtitle={item.Postcode}
                  containerStyle={{borderBottomWidth: 0}}
                  onPress={() => navigation.navigate('CollectionDates', {urpn: item.Uprn})}
                />
              )}
              keyExtractor={item => item.ShortAddress}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </List>
        );
    }
}

module.exports = AddressData
