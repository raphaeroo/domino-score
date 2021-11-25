import { StyleSheet } from 'react-native'
import { fontScale, normalize } from '~/utils'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: normalize(40)
  },
  content: {
    padding: normalize(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    paddingRight: normalize(15),
    alignItems: 'center'
  },
  rightContainer: {
    flex: 1,
    paddingLeft: normalize(15),
    alignItems: 'center'
  },
  title: {
    marginBottom: normalize(25),
    color: 'white',
    fontSize: fontScale(24),
    fontWeight: 'bold'
  },
  inputSeparator: {
    marginVertical: normalize(10)
  },
  button: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(8),
    alignSelf: 'center',
    backgroundColor: '#8c0000',
    borderRadius: normalize(10),
    height: normalize(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel: {
    fontSize: normalize(20),
    color: 'white',
    fontWeight: 'bold'
  },
  versusIconContainer: {
    paddingTop: normalize(50)
  },
  bottomButtonsContainer: {
    width: '100%',
    paddingHorizontal: normalize(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorNotification: {
    position: 'absolute',
    top: normalize(30),
    alignSelf: 'center',
    paddingHorizontal: normalize(10),
    borderRadius: normalize(10),
    paddingVertical: normalize(7),
    backgroundColor: '#8c0000'
  },
  errorMessage: {
    color: 'white',
    fontSize: fontScale(16),
    fontWeight: 'bold'
  }
})
