import { createContext, useContext } from 'react'

import { GameStore } from './Game'

export class RootStore {
  gameStore: GameStore

  constructor() {
    this.gameStore = new GameStore(this)
  }
}

const rootStore = createContext(new RootStore())

export const useStore = () => useContext(rootStore)
