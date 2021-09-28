import React from 'react'
import { IButtonProps } from './Button.interface'
import { Container } from './Button.style'

const Button = ({ type, text, size, onClick, margin }: IButtonProps) => {
  return (
    <Container type={type} size={size} margin={margin}>
      <button onClick={onClick}>{text}</button>
    </Container>
  )
}

export { Button }
