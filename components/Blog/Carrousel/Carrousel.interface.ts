import { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export interface ICarrouselProps {
  items: ICarrousel[]
  title?: ReactNode
  dotsMargin?: string
  isCustomCarouselItem?: boolean
  carouselItemStyle?: FlattenSimpleInterpolation
}

export interface ICarrousel {
  interval: number
  component: ReactNode
}

export interface ICarouselStyledProps {
  dotsMargin?: string
  isCustomCarouselItem?: boolean
  carouselItemStyle?: FlattenSimpleInterpolation
}
