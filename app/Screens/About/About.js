import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Text,
  View,
  StatusBar
} from 'react-native'

import HomeHeader from '../../Components/HomeHeader'


class AboutScreen extends Component {
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
          title="About"
          navigation={ navigation } />
          <Text> All data is provided by the City of York Council open API.</Text>
      </View>
    )
  }
}

AboutScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

module.exports = AboutScreen
