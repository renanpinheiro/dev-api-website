import React from 'react'
import { IButtonProps } from './Button.interface'
import { Container } from './Button.style'

const Button = ({
  type,
  text,
  size,
  onClick,
  margin,
  isDisabled,
}: IButtonProps) => {
  return (
    <Container type={type} size={size} margin={margin}>
      <button onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    </Container>
  )
}

export { Button }
