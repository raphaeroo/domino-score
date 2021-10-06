import { observable, action, computed, makeObservable, runInAction } from 'mobx'

import { storeObject, getObject } from '../../services/storage'
import { RootStore } from '../RootStore'

enum GameStorageKey {
  value = '@dominoScore/PERSISTED_RESULTS'
}

type Team = {
  p1: string,
  p2: string
}

type GameScore = {
  t1: number,
  t2: number
}

type Teams = {
  teamOne: Team,
  teamTwo: Team
}

type Results = {
  gameDay: string,
  scoreTeamOne: number,
  scoreTeamTwo: number,
  teamOne: Team,
  teamTwo: Team
}

export class GameStore {
  teamOne: Team = { p1: '', p2: '' }
  teamTwo: Team = { p1: '', p2: '' }
  gameDate = ''
  result: GameScore = { t1: 0, t2: 0 }

  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      teamOne: observable,
      teamTwo: observable,
      gameDate: observable,
      result: observable,
      gameState: computed,
      startGame: action,
      endGame: action
    })
    this.rootStore = rootStore
  }

  startGame = (teams: Teams) => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const dayOfGame = dd + '/' + mm + '/' + yyyy

    runInAction(() => {
      this.gameDate = dayOfGame
      this.teamOne = teams.teamOne
      this.teamTwo = teams.teamTwo
    })
  }

  endGame = async (results: GameScore) => {
    const allResults = await getObject(GameStorageKey.value)
    const newResults: Results = {
      gameDay: this.gameDate,
      scoreTeamOne: results.t1,
      scoreTeamTwo: results.t2,
      teamOne: this.teamOne,
      teamTwo: this.teamTwo
    }

    if (!allResults) {
      const makeArray = [newResults]

      await storeObject(GameStorageKey.value, makeArray)
    } else {
      const holder = allResults
      holder.push(newResults)

      await storeObject(GameStorageKey.value, holder)
    }

    runInAction(() => {
      this.result = results
    })
  }

  get gameState() {
    return {
      teamOne: this.teamOne,
      teamTwo: this.teamTwo,
      gameDate: this.gameDate,
      result: this.result
    }
  }
}
