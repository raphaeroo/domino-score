import React from 'react'
import { useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RenderHtml from 'react-native-render-html'
import { ArrowLeft } from 'react-native-feather'

import { rules } from './rules'

export const RulesScreen = ({ navigation }) => {
  const { width } = useWindowDimensions()

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 15, paddingTop: 20 }}
      edges={['top']}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ paddingBottom: 15 }}
      >
        <ArrowLeft color="#4c669f" width={30} height={30} />
      </TouchableOpacity>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <RenderHtml
          contentWidth={width}
          source={rules}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
