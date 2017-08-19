import React, { Component } from 'react';
import {TextInput, View, StyleSheet,TouchableWithoutFeedback } from 'react-native';

const dismissKeyboard = require('dismissKeyboard');

const inputText = (props) => {
  return (
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={8}
        {...props}
      />

  );
};

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
        borderWidth: 1
     }
});

module.exports = inputText;
