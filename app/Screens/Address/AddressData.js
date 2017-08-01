import React, { Component } from 'react';
import styles from './styles';

import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Platform,
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

class AddressData extends Component {

    renderFlatListItem(item) {
        return (
            <View style={{flexDirection: 'row', height: 52, alignItems: 'center', marginLeft: 10, marginRight: 10}}>
            <Text style={{fontSize: 16}}>{item.ShortAddress}</Text>
            </View>
        )
    }

    render() {
        return (
            <FlatList
            ItemSeparatorComponent = {() => (
                <View style={[{height: 1, backgroundColor: '#d3d3d3'}, {marginLeft: 0}]} />
            )}
            data = {this.props.data}
            keyExtractor={item => item.ShortAddress}
            renderItem={({item}) => this.renderFlatListItem(item)}
            />
        );
    }
}

module.exports = AddressData
