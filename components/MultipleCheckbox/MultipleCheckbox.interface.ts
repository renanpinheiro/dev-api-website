export interface IMultipleCheckboxProps {
  text: string
  name: string
  isMultiple?: boolean
  setError(error: string): void
}

export interface ICheckStyles {
  isChecked: boolean
}
