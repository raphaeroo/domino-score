import React from 'react'
import { View, TextInput } from 'react-native'
import { Controller } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import type { TextInputProps } from 'react-native'

import styles from './styles'

interface InputProps extends TextInputProps {
  control: Control
  fieldName: string
}

export const Input = ({ fieldName, placeholder, control }: InputProps) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            onBlur={onBlur}
            placeholderTextColor="#bbb"
            style={{ color: 'black' }}
            onChangeText={onChange}
            placeholder={placeholder}
          />
        )}
        name={fieldName}
      />
    </View>
  )
}
