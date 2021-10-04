import { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export interface ICarrouselProps {
  items: ICarrousel
  title?: ReactNode
}
export interface ICarrousel {
  [width: number]: IUrl[]
}

interface IUrl {
  [position: number]: string
}
