import { ReactNode } from 'react'

interface ICarrousel {
  interval: number
  component: ReactNode
}

export interface ICarrouselProps {
  items: ICarrousel[]
  isControls?: boolean
}
