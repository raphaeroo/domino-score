import { normalize } from '../normalize'

export const fontScale = (size: number, factor = 0.5) =>
  size + (normalize(size) - size) * factor
