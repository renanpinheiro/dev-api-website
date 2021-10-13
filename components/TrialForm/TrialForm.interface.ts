import { ReactElement } from 'react'

export interface IErrorTextStyle {
  hasError: boolean
}

export interface ITrialFormProps {
  conversionIdentifier: string
}

export interface IFormStepperProps {
  children: ReactElement[]
  conversionIdentifier: string
}
