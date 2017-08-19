import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  },
  container: {
    backgroundColor: "#fff"
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  header: {
    width: '100%',
    backgroundColor: '#00336b',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTitle: {
    padding: 8,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 13,
    color: 'black'
  },
  textBold: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black'
  }
})
