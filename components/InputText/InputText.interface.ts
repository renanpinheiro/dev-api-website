export interface IInputTextProps {
  name: string
  label: string
  isRequired?: boolean
  placeholder?: string
  mask?: string
  type?: string
}

export interface IInputStyles {
  hasError: boolean
}

export interface ILabelStyles {
  isRequired?: boolean
}
