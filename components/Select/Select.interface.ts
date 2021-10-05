export interface ISelectProps {
  name: string
  label: string
  options: IOption[]
}

export interface IOption {
  label: string
  value: string
}

export interface IOptionsContainerStyle {
  isOpen: boolean
}
