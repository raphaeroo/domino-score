import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  content: {
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    paddingRight: 15,
    alignItems: 'center'
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center'
  },
  title: {
    marginBottom: 25,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  inputSeparator: {
    marginVertical: 10
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 10
  },
  buttonLabel: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})
