import React from 'react'
import { ImageURISource } from 'react-native'
import { SvgProps } from 'react-native-svg'

declare module '*.svg' {
  const content: React.FC<SvgProps>
  export default content
}
declare module '*.png' {
  const value: string | ImageURISource
  export default value
}
declare module '*.jpg' {
  const value: string | ImageURISource
  export default value
}
