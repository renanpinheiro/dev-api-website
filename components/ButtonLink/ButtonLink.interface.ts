export interface IButtonProps {
  text: string
  href: string
  target: '_blank' | '_self'
  type: 'default' | 'outline' | 'primary'
  size: 'small' | 'default' | 'large'
  margin?: string
}

export interface IButtonStyle {
  type: 'default' | 'outline' | 'primary'
  size: 'small' | 'default' | 'large'
  margin?: string
}
