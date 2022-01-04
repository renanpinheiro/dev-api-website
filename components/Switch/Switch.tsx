import React from 'react'

import { ISwitchProps } from './Switch.interface'
import {
  Container,
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
} from './Switch.style'

const Switch = ({ isChecked, isDisabled = false, onChange }: ISwitchProps) => {
  return (
    <Container>
      <SwitchContainer>
        <SwitchInput
          data-testid="switch-input"
          type="checkbox"
          onChange={onChange}
          checked={isChecked}
          disabled={isDisabled}
        />
        <SwitchLabel data-testid="switch-label" htmlFor="checkbox" />
      </SwitchContainer>
    </Container>
  )
}

export { Switch }
