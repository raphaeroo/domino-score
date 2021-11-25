import { StyleSheet } from 'react-native'
import { fontScale, normalize } from '~/utils'

export default StyleSheet.create({
  main: {
    flex: 1,
    padding: normalize(40)
  },
  backButton: {
    marginBottom: normalize(30)
  },
  itemContainer: {
    elevation: 6,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: normalize(10),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(20),
    marginBottom: normalize(20)
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  players: {
    color: 'black',
    fontSize: fontScale(25)
  },
  playerScore: {
    color: 'black',
    fontSize: fontScale(35),
    fontWeight: 'bold'
  },
  playerOneContainer: {
    flex: 1
  },
  playerTwoContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  teamOneScoreContainer: {
    width: normalize(80),
    alignItems: 'flex-end',
    paddingRight: normalize(10)
  },
  teamTwoScoreContainer: {
    width: normalize(80),
    paddingLeft: normalize(10)
  },
  versusContainer: {
    width: normalize(80),
    alignItems: 'center'
  },
  noMatchLabel: {
    fontSize: fontScale(25),
    color: 'white',
    textAlign: 'center'
  },
  gameDayLabel: {
    color: '#999'
  }
})
