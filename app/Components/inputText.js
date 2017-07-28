import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

class inputText extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        <TextInput
          style={styles.textInput}
          placeholder="Postal Code"
          maxLength={6}
          onChangeText={(text) => this.setState({text})}
        />
    );
  }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        borderColor: '#d3d3d3',
        borderRadius: 2,
        borderWidth: 1,
     }
});

module.exports = inputText;
