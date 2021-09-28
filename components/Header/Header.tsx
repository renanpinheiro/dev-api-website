import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import Link from './Link'
import * as S from './Header.style'
import { Dropdown } from './Dropdown'
import { handleNavLink } from './menuOptions'
import { useRouter } from 'next/router'
import Menu from './Menu'

const Header = () => {
  const router = useRouter()
  const dropdownRef = useRef(null)
  const [openDropdown, setOpenDropdown] = useState()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const navLinks = handleNavLink(router.asPath)

  const handleScroll = () => {
    const offsetY = window.pageYOffset

    if (offsetY >= 80) {
      setOpenDropdown(undefined)
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

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <Link href="/">
          <S.Logo src="/logo/devapi-primary.svg" alt="devapi" />
        </Link>
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
                  <S.NavLink isActive={link.isActive}>{link.name}</S.NavLink>

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

      <S.MenuContainer>
        <S.Menu title="Menu" onClick={handleOpenMenu}>
          <span>Menu</span>
          <S.Burger>
            <div />
            <div />
            <div />
          </S.Burger>
        </S.Menu>

        <Menu open={isOpenMenu} close={handleOpenMenu} />
      </S.MenuContainer>
    </S.Container>
  )
}

export { Header }
