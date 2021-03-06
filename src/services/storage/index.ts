import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (err) {
    return `${err}`
  }
}

export const storeObject = async (key: string, object: object) => {
  const jsonObject = JSON.stringify(object)
  try {
    await AsyncStorage.setItem(key, jsonObject)
  } catch (err) {
    return `${err}`
  }
}

export const getData = async (key: string) => {
  try {
    const result = await AsyncStorage.getItem(key)
    return result
  } catch (err) {
    return `${err}`
  }
}

export const getObject = async (key: string) => {
  try {
    const result = await AsyncStorage.getItem(key)
    return result != null ? JSON.parse(result) : null
  } catch (err) {
    return `${err}`
  }
}

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (err) {
    return `${err}`
  }
}
