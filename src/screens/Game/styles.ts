import { StyleSheet, Dimensions } from 'react-native'
import { fontScale, normalize } from '~/utils'

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
    fontSize: fontScale(200),
    fontWeight: 'bold',
    color: 'white'
  },
  endGameButton: {
    position: 'absolute',
    backgroundColor: '#dae2f6',
    elevation: 4,
    paddingVertical: normalize(20),
    paddingHorizontal: normalize(30),
    borderRadius: normalize(90),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: normalize(30),
    marginLeft: width - normalize(width - 65)
  },
  endGameButtonLabel: {
    fontWeight: 'bold',
    fontSize: fontScale(15),
    textAlign: 'center',
    color: '#192f6a'
  }
})
