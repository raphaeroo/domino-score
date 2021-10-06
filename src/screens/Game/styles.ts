import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerLeft: {
    flex: 1,
    backgroundColor: '#8c0000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerRight: {
    flex: 1,
    backgroundColor: '#192f6a',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textScore: {
    fontSize: 200,
    fontWeight: 'bold',
    color: 'white'
  },
  endGameButton: {
    position: 'absolute',
    backgroundColor: '#dae2f6',
    elevation: 4,
    width: 80,
    paddingVertical: 4,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    left: width / 3 + 118
  },
  endGameButtonLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: '#192f6a'
  }
})
