import { createContext, useContext } from 'react'

export class RootStore {}

const rootStore = createContext(new RootStore())

export const useStore = () => useContext(rootStore)
