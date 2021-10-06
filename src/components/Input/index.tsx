import React from 'react'
import { View, TextInput, TextInputProps } from 'react-native'

import styles from './styles'

export const Input = ({ value, onChangeText, placeholder }: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  )
}
