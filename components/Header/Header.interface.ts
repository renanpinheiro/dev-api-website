export interface IHeaderStyle {
  isActive: boolean
}

export interface IMenuContainerProps {
  isOpen: boolean
}

export interface IMenuOverlayProps {
  isOverlay: boolean
}

export interface INavLinkDropDown {
  name: string
  url: string
  isActive: boolean
}
export interface INavLinks {
  name: string
  isActive: boolean
  dropDown: INavLinkDropDown[]
  url?: string
}

export interface IHeaderMenuProps {
  isOpen: boolean
  close: () => void
  navLinks: INavLinks[]
}

export interface INavLinkTitleStyle {
  isActive: boolean
}
