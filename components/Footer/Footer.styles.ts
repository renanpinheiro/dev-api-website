import styled from 'styled-components'

import { theme } from '../../styles/theme'
import { IColProps } from './Footer.interfaces'

export const FooterContainer = styled.div`
  z-index: 4;
  width: 100%;
  height: auto;
  padding: 60px 6vw 70px 6vw;
  background-color: #221e1e;

  @media only screen and (max-width: 996px) {
    padding-right: 20px 15px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 828px) {
    justify-items: flex-start;
  }
`

export const Col = styled.div<IColProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${props => props.content};
  width: 100%;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 20px;
  }
`

export const NewsletterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: white;

  p {
    padding: 10px;
    font-size: 26px;
    line-height: 1;

    @media only screen and (max-width: 828px) {
      font-size: 22px;
    }

    span {
      font-style: italic;
      font-weight: 700;
    }
  }
`

export const Newsletter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 0 0 10px;
  padding: 10px;
`

export const Pipe = styled.div`
  width: 3px;
  background-color: ${theme.colors.secondary};
`

export const ResponsivePipe = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 3px;
    margin: 7px 0 15px 0;
    background-color: ${theme.colors.secondary};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
`

export const Title = styled.div`
  padding-top: 0.5vh;
  padding-left: 1vw;
  font-size: 18px;
  line-height: 1;
  color: ${theme.colors.secondary};

  span {
    font-style: italic;
    font-weight: 700;
  }

  @media only screen and (max-width: 500px) {
    padding-top: 0.5vh;
  }
`

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vw;
  font-size: 2rem;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 828px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  width: 130px;
  height: 70px;
  margin-right: 15px;

  @media only screen and (max-width: 828px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  height: 90px;
  line-height: 1.3;

  @media only screen and (max-width: 828px) {
    flex-direction: column;
    height: auto;
  }
`

export const Address = styled.div`
  margin-left: 10px;
  font-size: 18px;
  color: white;

  span {
    font-style: italic;
    font-weight: 700;
  }

  @media only screen and (max-width: 828px) {
    margin: 0;
    margin-bottom: 15px;
    font-size: 16px;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 16px;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  @media only screen and (max-width: 828px) {
    justify-content: center;
  }
`

export const SocialMedia = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: 18px;
  line-height: 1;
  color: ${theme.colors.secondary};

  span {
    font-style: italic;
    font-weight: 700;
  }

  @media only screen and (max-width: 828px) {
    margin-left: 0;
    font-size: 16px;
  }
`

export const SocialLogocontainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const SocialMediaLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 15px;

  @media only screen and (max-width: 828px) {
    margin-left: 10px;
  }
`
