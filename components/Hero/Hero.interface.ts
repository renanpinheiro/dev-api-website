import { ReactNode } from 'react'

export interface IHeroProps {
  minHeight?: number
  maxHeight?: number
  children: ReactNode
  backgroundUrl?: string
}

export interface IContainerStyle {
  minHeight?: number
  maxHeight?: number
  backgroundUrl?: string
}
