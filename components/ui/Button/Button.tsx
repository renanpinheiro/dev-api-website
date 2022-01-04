import React from 'react'

import Router from 'next/router'

import { theme } from '../../../styles/theme'
import { IButtonProps } from './Button.interface'
import * as S from './Button.style'

const Button = ({
  color,
  text,
  url,
  type,
  disabled,
  size,
  height,
  fontSize,
}: IButtonProps) => {
  const colorButton = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    green: theme.colors.green[300],
  }[color]

  return (
    <S.Container size={size}>
      <S.BootstrapButton
        type={type}
        onClick={() => url && Router.push(url)}
        color={colorButton || color}
        disabled={disabled}
        height={height}
        fontSize={fontSize}
      >
        {text}
      </S.BootstrapButton>
    </S.Container>
  )
}

export { Button }
