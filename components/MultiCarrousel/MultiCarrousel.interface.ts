import { ReactNode } from 'react'

export interface IMultiCarrouselProps {
  items: IMultiCarrousel[]
  title: ReactNode
  interval: number
  itemsPerSlide?: number
  itemsPerScroll?: number
}

export interface IMultiCarrousel {
  name: string
  url: string
}
