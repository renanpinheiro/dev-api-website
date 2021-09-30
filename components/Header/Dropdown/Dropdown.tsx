import React from 'react'
import Link from '../Link'
import { IDropdownProps } from './Dropdown.interface'
import {
  Container,
  DropdownContainer,
  DropdownItem,
  DropdownItemContainer,
} from './Dropdown.style'

const Dropdown = ({ children, isOpen, dropdownItems }: IDropdownProps) => {
  const hasTwoColumns = dropdownItems && dropdownItems.length > 5
  return (
    <Container>
      {children}
      {isOpen && dropdownItems && (
        <DropdownContainer hasTwoColumns={hasTwoColumns}>
          {dropdownItems.map((item, index) => {
            return (
              <DropdownItemContainer key={index}>
                <Link href={item.url} activeClassName="active">
                  <DropdownItem id={`${index}`}>{item.name}</DropdownItem>
                </Link>
              </DropdownItemContainer>
            )
          })}
        </DropdownContainer>
      )}
    </Container>
  )
}

export { Dropdown }
