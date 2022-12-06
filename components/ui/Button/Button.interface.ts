export interface IButtonProps {
  color: 'primary' | 'secondary' | 'green' | string
  text: string
  url?: string
  type?: string
  disabled?: boolean
  size?: string
  height?: string
  fontSize?: string
  borderRadius?: string
}

export interface IContainerStyledProps {
  size?: string
}

export interface IButtonStyledProps {
  color?: string
  size?: string
  height: string
  fontSize: string
}
