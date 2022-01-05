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
  buttonType,
}: IButtonProps) => {
  return (
    <Container type={type} size={size} margin={margin}>
      <button onClick={onClick} disabled={isDisabled} type={buttonType}>
        {text}
      </button>
    </Container>
  )
}

export { Button }
