import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6rem 12rem;
  background-color: #221e1e;

  // responsive
  @media only screen and (max-width: 996px) {
    flex-direction: column;
    padding: 10vh 2vw;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const LogoContainer = styled.div``
export const Logo = styled.img``
export const SocialMediaContainer = styled.div`
  margin-top: 5vh;

  @media only screen and (max-width: 996px) {
    align-items: center;
    justify-content: center;
  }
`

export const SocialMedia = styled.p`
  margin: 0;
  font-size: 1.25rem;

  line-height: 1;
  color: ${theme.colors.secondary};

  span {
    font-style: italic;
    font-weight: 700;
  }

  @media only screen and (max-width: 828px) {
    margin-left: 0;
    font-size: 1rem;

    text-align: center;
  }
`

export const SocialLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`

export const SocialMediaLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @media only screen and (max-width: 828px) {
    margin-left: 10px;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  height: 60px;
  line-height: 1.7;
  margin-top: 5vh;

  @media only screen and (max-width: 828px) {
    flex-direction: column;
    height: auto;
  }
`

export const Address = styled.div`
  margin-left: 10px;
  font-size: 1rem;

  color: white;

  span {
    font-style: italic;
    font-weight: 700;
  }

  @media only screen and (max-width: 828px) {
    margin: 0;
    margin-bottom: 15px;
    font-size: 1rem;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`

export const Pipe = styled.div`
  width: 3px;
  background-color: ${theme.colors.secondary};
`

export const ResponsiveNavsContainer = styled.div`
  @media only screen and (max-width: 996px) {
  }
`
export const NavContainer = styled.div`
  font-size: 1rem;
`
