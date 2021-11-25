import React from 'react'
import { useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html'
import { ArrowLeft } from 'react-native-feather'

import { rules } from './rules'
import { normalize } from '~/utils'

export const RulesScreen = ({ navigation }) => {
  const { width } = useWindowDimensions()

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: normalize(15), paddingTop: normalize(20) }}
      edges={['top']}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingBottom: normalize(15) }}
      >
        <ArrowLeft color="#4c669f" width={normalize(30)} height={normalize(30)} />
      </TouchableOpacity>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <RenderHtml
          baseStyle={{ color: 'black' }}
          contentWidth={width}
          source={rules}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
