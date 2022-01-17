import React from 'react'

import Link from '../Link'
import { IDropdownProps } from './Dropdown.interface'
import * as S from './Dropdown.style'

const Dropdown = ({ children, isOpen, dropdownItems }: IDropdownProps) => {
  const hasTwoColumns = dropdownItems && dropdownItems.length > 5

  const handleTop = () => {
    scrollTo({ top: 50, behavior: 'smooth' })
  }

  return (
    <S.Container>
      {children}
      {isOpen && dropdownItems && (
        <S.DropdownContainer hasTwoColumns={hasTwoColumns}>
          {dropdownItems.map((item, index) => {
            return (
              <S.DropdownItemContainer key={index} isActive={item.isActive}>
                <Link href={item.url} activeClassName="active">
                  <S.DropdownItem id={`${index}`} onClick={handleTop}>
                    {item.name}
                  </S.DropdownItem>
                </Link>
              </S.DropdownItemContainer>
            )
          })}
        </S.DropdownContainer>
      )}
    </S.Container>
  )
}

export { Dropdown }
