import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeHeader from '../../Components/HomeHeader';
import InputText from '../../Components/inputText';
import styles from './styles';

import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'

class PostalCode extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      const { navigation } = this.props
        return (
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={'#202930'} />
            <HomeHeader
                title="York Bin Day"
                navigation={ navigation } />

            <View style={styles.container}>
                <Text style={styles.text}> Insert Postal Code </Text>

                <InputText> </InputText>
            </View>


         </View>
        );
    }
 }

  PostalCode.propTypes = {
  navigation: PropTypes.object.isRequired
  }

  module.exports = PostalCode
