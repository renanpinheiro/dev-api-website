import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import {
  ButtonContainer,
  Container,
  Logo,
  LogoContainer,
  NavBarContainer,
  NavBar,
  NavLink,
} from './Header.style'
import { navLinks } from './menuOptions'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <Container isScrollStyle={isScrolled}>
      <LogoContainer>
        {isScrolled ? (
          <>
            <Logo
              src="../static/images/shared/devapi-primary.svg"
              alt="devapi"
            />
          </>
        ) : (
          <>
            <Logo
              src="../static/images/shared/devapi-white.svg"
              alt="devapi-white"
            />
          </>
        )}
      </LogoContainer>
      <NavBarContainer>
        <NavBar>
          {navLinks.map((link, index) => {
            return (
              <div key={index}>
                <NavLink>{link.name}</NavLink>
              </div>
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
