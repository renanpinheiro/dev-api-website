import React, { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'

import { ButtonLink } from '../ButtonLink'
import { Dropdown } from './Dropdown'
import * as S from './Header.style'
import Link from './Link'
import { Menu } from './Menu'
import { handleNavLink } from './menuOptions'

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

  const handleClickOutSide = event => {
    const element = event.target
    const id = element.getAttribute('id')
    if (!id) {
      setOpenDropdown(undefined)
    }
  }

  useEffect(() => {
    setOpenDropdown(undefined)
  }, [router.asPath])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousedown', handleClickOutSide)
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

  if (router.asPath === '/free-trial') {
    return (
      <S.Container isCentralized>
        <S.LogoContainer>
          <Link href="/">
            <a title="DevApi" rel="noreferrer">
              <S.Logo src="/logo/devapi-primary.svg" alt="devapi" />
            </a>
          </Link>
        </S.LogoContainer>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <Link href="/">
          <a title="DevApi" rel="noreferrer">
            <S.Logo src="/logo/devapi-primary.svg" alt="devapi" />
          </a>
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
                  <S.NavLink
                    href={link.url && link.url}
                    rel="noreferrer"
                    isActive={link.isActive}
                  >
                    {link.name}
                  </S.NavLink>

                  {link.dropDown && (
                    <S.Arrow src="/arrows/arrow-dropdown.svg" alt={''} />
                  )}
                </S.NavLinkContainer>
              </Dropdown>
            )
          })}
        </S.NavBar>
      </S.NavBarContainer>

      <S.ButtonContainer>
        <ButtonLink
          text="Fale com um especialista"
          href="/converse-com-especialista"
          target="_self"
          type="default"
          size="default"
          margin="0 20px 0 0"
        />
        <ButtonLink
          text="Login"
          href="https://app.devapi.com.br"
          target="_self"
          type="outline"
          size="default"
        />
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

        <Menu isOpen={isOpenMenu} close={handleOpenMenu} navLinks={navLinks} />
      </S.MenuContainer>
    </S.Container>
  )
}

export { Header }
