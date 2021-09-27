import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import Link from './Link'
import * as S from './Header.style'
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
    <S.Container isScrollStyle={isScrolled}>
      <S.LogoContainer>
        {isScrolled ? (
          <Link href="/">
            <S.Logo src="/logo/devapi-primary.svg" alt="devapi" />
          </Link>
        ) : (
          <Link href="/">
            <S.Logo src="/logo/devapi-white.svg" alt="devapi-white" />
          </Link>
        )}
      </S.LogoContainer>
      <S.NavBarContainer>
        <S.NavBar>
          {navLinks.map((link, index) => {
            const isOpen = openDropdown === index
            return (
              <Dropdown
                isOpen={isOpen}
                key={index}
                dropdownItems={link.dropDown}
              >
                <S.NavLinkContainer
                  onClick={() => handleOpenDropdown(index)}
                  ref={dropdownRef}
                >
                  <Link
                    href={link.url ? link.url : ''}
                    activeClassName="active"
                  >
                    <S.NavLink>{link.name}</S.NavLink>
                  </Link>
                  {link.dropDown && (
                    <S.Arrow src="/arrows/arrow-dropdown.svg" />
                  )}
                </S.NavLinkContainer>
              </Dropdown>
            )
          })}
        </S.NavBar>
      </S.NavBarContainer>
      <S.ButtonContainer>
        <Button
          size="default"
          text="Teste grátis"
          type="default"
          margin="0 20px 0 0"
        />
        <Button size="default" text="Login" type="outline" />
      </S.ButtonContainer>
    </S.Container>
  )
}

export { Header }
