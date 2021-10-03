import { ReactNode } from 'react'

export interface IHeroProps {
  minHeight?: number
  maxHeight?: number
  children: ReactNode
}

export interface IContainerStyle {
  minHeight?: number
  maxHeight?: number
}
