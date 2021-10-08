import { ReactNode } from 'react'
export interface IStepTextContainerStyle {
  isLastItem?: boolean
}

export interface IStepsProps {
  steps: ISteps[]
}

interface ISteps {
  label: string
  icon: ReactNode
  isPass: boolean
}

export interface IIconContainerStyle {
  isPass: boolean
}

export interface IStepTextStyle {
  isPass: boolean
}
