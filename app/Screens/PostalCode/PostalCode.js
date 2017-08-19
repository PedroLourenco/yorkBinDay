import React, { Component } from 'react';
import HomeHeader from '../../Components/HomeHeader';
import InputText from '../../Components/inputText';
import Button from '../../Components/Button/Button';
import styles from './styles';

import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Alert,
  Keyboard
} from 'react-native'

class PostalCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: null
    }
  }

  handleTextInout = (text) => {
    if (this.state.code) {
      return (
        this.props.navigation.navigate('Address', {code: this.state.code})
      )
    }
  }

    render() {
        const { navigation } = this.props
        var code;
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

                    <InputText
                      placeholder="Postal Code"
                      onChangeText={(text) => this.setState({code: text})}
                    />

                    <View style={{top: 40}}>
                        <Button
                            text="Get Address"
                            onPress={ this.handleTextInout}
                          />
                    </View>
                </View>
            </View>
        );
    }
 }

  module.exports = PostalCode
