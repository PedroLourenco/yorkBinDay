import React, { Component } from 'react';
import { List, ListItem } from "react-native-elements";
import styles from './styles';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';

class CollectionData extends Component {
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

  renderHeader = () => {
    return (
      <View style={styles.container}>
        <Text>Advert Container</Text>
      </View>
    );
  }

  renderItems = (item) => {
    // parse JSON formatted date to javascript date object
    let date = new Date(parseInt(item.item.NextCollection.substr(6)));
    let formatedDate = date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{item.item.WasteTypeDescription}</Text>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.textBold}>Next Collection: </Text>
          <Text style={styles.text}>{formatedDate}</Text>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.textBold}>Waste Type: </Text>
          <Text style={styles.text}>{item.item.WasteType}</Text>
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.textBold}>Materials Collected: </Text>
          <Text style={styles.text}>{item.item.MaterialsCollected}</Text>
        </View>
      </View>
    )
  };

  render () {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={this.renderItems}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.WasteTypeDescription}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    )
  }
}



module.exports = CollectionData
