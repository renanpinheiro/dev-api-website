import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import Link from './Link'
import { useRouter } from 'next/router'
import {
  ButtonContainer,
  Container,
  Logo,
  LogoContainer,
  NavBarContainer,
  NavBar,
  NavLinkContainer,
  NavLink,
  Arrow,
} from './Header.style'
import { navLinks } from './menuOptions'
import { Dropdown } from './Dropdown'

const Header = () => {
  const dropdownRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState()

  const handleScroll = () => {
    const offsetY = window.pageYOffset

    if (offsetY >= 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleOpenDropdown = index => {
    if (openDropdown === index) {
      setOpenDropdown(undefined)
    } else {
      setOpenDropdown(index)
    }
  }

  return (
    <Container isScrollStyle={isScrolled}>
      <LogoContainer>
        {isScrolled ? (
          <Link href="/">
            <Logo src="/logo/devapi-primary.svg" alt="devapi" />
          </Link>
        ) : (
          <Link href="/">
            <Logo src="/logo/devapi-white.svg" alt="devapi-white" />
          </Link>
        )}
      </LogoContainer>
      <NavBarContainer>
        <NavBar>
          {navLinks.map((link, index) => {
            const isOpen = openDropdown === index
            return (
              <Dropdown
                isOpen={isOpen}
                key={index}
                dropdownItems={link.dropDown}
              >
                <NavLinkContainer
                  onClick={() => handleOpenDropdown(index)}
                  ref={dropdownRef}
                >
                  <Link
                    href={link.url ? link.url : ''}
                    activeClassName="active"
                  >
                    <NavLink>{link.name}</NavLink>
                  </Link>
                  {link.dropDown && <Arrow src="/arrows/arrow-dropdown.svg" />}
                </NavLinkContainer>
              </Dropdown>
            )
          })}
        </NavBar>
      </NavBarContainer>
      <ButtonContainer>
        <Button
          size="default"
          text="Teste grátis"
          type="default"
          margin="0 20px 0 0"
        />
        <Button size="default" text="Login" type="outline" />
      </ButtonContainer>
    </Container>
  )
}

export { Header }
