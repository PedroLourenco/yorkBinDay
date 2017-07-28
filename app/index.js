/* @flow */
import React from 'react'

import {
  View,
  StatusBar
} from 'react-native'

import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation'

import AboutScreen          from './Screens/About/About'
import PostalCodeScreen           from './Screens/PostalCode/PostalCode'
//import ColectionDates       from './Screens/ColectionDates/ColectionDates'
import SlideMenu            from './Components/SlideMenu'

const MainScreen = DrawerNavigator(
  {
    PostalCode: {
      path: '/PostalCode',
      screen: PostalCodeScreen
    },
    About: {
      path: '/About',
      screen: AboutScreen
    }
  },
  {
    contentComponent: SlideMenu,
    drawerPosition: 'left',
    initialRouteName: 'PostalCode',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    style: {
      backgroundColor: '#202930'
    }
  }
)

const YorkBinDayRoutes = {
  MainScreen: {
    name: 'PostalCode',
    screen: PostalCodeScreen
  }
}

const AppNavigator = StackNavigator(
  {
    ...YorkBinDayRoutes,
    Index: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
    mode: 'card'
  }
)

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={'#202930'} />
    <AppNavigator />
  </View>
)
