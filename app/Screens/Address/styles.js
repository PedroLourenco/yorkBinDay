import {
  StyleSheet,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  }
})
