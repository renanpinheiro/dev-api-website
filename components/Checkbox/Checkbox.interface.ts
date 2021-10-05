import { ReactNode } from 'react'

export interface ICheckboxProps {
  label: string | ReactNode
  name: string
}

export interface ICheckStyles {
  isChecked: boolean
}
