import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native'

import ScalableText from 'react-native-text'

class SlideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: ''
    }
  }

  render() {
    function icon(index) {
      if (index == 0) {
        return <Image source={ require('../../assets/images/icon_standings.png') } style={ styles.btnIcon } />
      } else if (index == 1) {
        return <Image source={ require('../../assets/images/icon_calendar.png') } style={ styles.btnIcon } />
      }
    }

    return (
      <View style={ styles.content }>
        <Image
          style={ styles.menuImg }
          source={ require('../../assets/images/City_of_York_Council_logo.jpg') }/>
        {this.props.navigation.state.routes.map((route, index) => (
          <TouchableHighlight
            onPress={ () => this.props.navigation.navigate(route.routeName) }
            onHideUnderlay={ () => { this.setState({ pressed: '' }) } }
            onShowUnderlay={ () => { this.setState({ pressed: route.routeName }) } }
            style={[ styles.btn, this.state.pressed === route.routeName ? styles.tabPress : {} ]}
            key={ route.routeName }>
            <View style={ styles.btnBox }>
              { icon(index) }
              <ScalableText style={[ styles.btnTxt, this.props.navigation.state.index === index ? styles.btnTxtActive : {} ]}>
                { route.routeName.toUpperCase() }
              </ScalableText>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  menuImg: {
    position: 'relative',
    width: null,
    height: 150
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#2a3540'
  },
  btnBox: {
    flexDirection: 'row'
  },
  btnIcon: {
    height: 16,
    width: 16
  },
  btnTxt: {
    paddingLeft: 20,
    color: "#000",
    fontSize: 16,
    lineHeight: 17,
  },
  btnTxtActive: {
    color: "#000"
  }
})

SlideMenu.propTypes = {
  navigation: PropTypes.object.isRequired
}

module.exports = SlideMenu
