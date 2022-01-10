import { ReactNode } from 'react'

export interface ICardPlanItems {
  imageUrl: string
  title: string
  text: string
  middleText?: string
  subText?: ReactNode
  buttonText: string
  buttonColor?: 'primary' | 'secondary' | 'green'
  url?: string
  textMobile?: string
}
