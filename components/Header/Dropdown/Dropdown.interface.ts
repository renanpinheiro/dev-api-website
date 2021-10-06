import { ReactNode } from 'react'

interface IDropdownItem {
  name: string
  url: string
  isActive: boolean
}

export interface IDropdownProps {
  children: ReactNode
  isOpen: boolean
  dropdownItems?: IDropdownItem[]
}

export interface IDropdownStyle {
  hasTwoColumns?: boolean
  isActive?: boolean
}
