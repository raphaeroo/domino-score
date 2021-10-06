import { Dimensions, PixelRatio } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

type BasedType = 'width' | 'height'
export const normalize = (size: number, based: BasedType = 'height') => {
  const wscale = SCREEN_WIDTH / 375
  const hscale = SCREEN_HEIGHT / 667

  const newSize = based === 'height' ? size * hscale : size * wscale
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}
