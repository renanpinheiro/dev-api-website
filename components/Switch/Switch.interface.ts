import React from 'react'

export interface ISwitchProps {
  isDisabled?: boolean
  isChecked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}
