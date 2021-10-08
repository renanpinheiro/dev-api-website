export interface IButtonProps {
  type: 'default' | 'outline'
  text: string
  size: 'small' | 'default' | 'large'
  onClick?: () => void
  margin?: string
  isDisabled?: boolean
  buttonType?: 'submit' | 'reset' | 'button'
}

export interface IButtonStyle {
  type: 'default' | 'outline'
  size: 'small' | 'default' | 'large'
  margin?: string
}
