import { StyleSheet } from 'react-native'
import { normalize } from '~/utils'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: normalize(2),
    paddingHorizontal: normalize(5),
    backgroundColor: 'white',
    borderRadius: normalize(10),
    elevation: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#555'
  }
})
