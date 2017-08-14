import React, { Component } from 'react';
import {TouchableHighlight, Text, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const StatusBar = (props) => {
  const {title, leftButton, onpress } = props

  return (
    <View style={styles.statusBar}>
      <Text style={styles.headerTxt}>{title}</Text>

        <TouchableHighlight
            style={styles.btn}
            onPress={onpress}>
            <Image
                style={styles.btnLeft}
                source={leftButton}
            />
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#00336b',
    height: 80
  },
  headerTxt: {
    top: 40,
    color: '#fff',
    fontSize: 18,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  },
  btn: {
    height: 60,
    width: 60,
    marginBottom: 17,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnLeft: {
    height: 40,
    width: 40
  }
});

StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
  onpress: PropTypes.func.isRequired
}

module.exports = StatusBar;
