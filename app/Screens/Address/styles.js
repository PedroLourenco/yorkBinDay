import {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native'

import { ApolloClient, ApolloProvider } from 'react-apollo';

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  statusBar: {
    backgroundColor: '#e7e7e7',
    height: 80
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  },
  btn: {
    height: 60,
    width: 60,
    marginBottom: Platform.OS === 'ios' ? 17 : 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnLeft: {
    height: 40,
    width: 40
  },
  headerTxt: {
    top: 40,
    color: '#000',
    fontSize: 18,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  }
})
