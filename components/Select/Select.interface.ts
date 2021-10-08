export interface ISelectProps {
  name: string
  label: string
  options: IOption[]
  isRequered?: boolean
}

export interface IOption {
  label: string
  value: string
}

export interface IOptionsContainerStyle {
  isOpen: boolean
}

export interface ISelectionStyle {
  hasError?: boolean
}

export interface ILabelStyles {
  isRequired?: boolean
}
