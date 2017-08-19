import React, { Component } from 'react';
import {TouchableHighlight, Text, View, StyleSheet, Image, Platform} from 'react-native';
import PropTypes from 'prop-types';

const StatusBar = (props) => {
  const {title, leftButton, onpress} = props

  return (
    <View style={styles.statusBar}>

      <TouchableHighlight style={styles.btn}
        onPress={onpress}>
          <Image
            style={styles.btnLeft}
            source={leftButton}
          />
      </TouchableHighlight>

      <View style={styles.titleContainer}>
        <Text style={styles.headerTxt}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#00336b',
    height: Platform.OS === 'ios' ? 80 : 60,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    top: Platform.OS === 'ios' ? 10 : null,
    paddingRight: 30
  },
  btn: {
    width: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    top: Platform.OS === 'ios' ? 10 : null,
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
