import { ReactNode } from 'react'

export interface IBoxReverseProps {
  title: ReactNode
  image: string
  content: ReactNode
  flexDirection?: 'row' | 'row-reverse'
  hasPipe: boolean
}

export interface IControlContainerStyle {
  flexDirection?: 'row' | 'row-reverse'
}
