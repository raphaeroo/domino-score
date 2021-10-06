import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  main: {
    flex: 1,
    padding: 40
  },
  backButton: {
    marginBottom: 30
  },
  itemContainer: {
    elevation: 6,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  players: {
    color: 'black',
    fontSize: 25
  },
  playerScore: {
    color: 'black',
    fontSize: 25,
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
    width: 80,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  teamTwoScoreContainer: {
    width: 80,
    paddingLeft: 10
  },
  versusContainer: {
    width: 80,
    alignItems: 'center'
  },
  noMatchLabel: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  }
})
