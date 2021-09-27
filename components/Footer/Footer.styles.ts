import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { IColProps } from './Footer.interfaces'
export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 90px 60px 70px 60px;

  background-color: #221e1e;

  @media only screen and (max-width: 828px) {
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

  @media only screen and (max-width: 828px) {
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
  @media only screen and (max-width: 828px) {
    width: 100%;
    height: 3px;
    margin: 7px 0 15px 0;
    background-color: ${theme.colors.secondary};
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  @media only screen and (max-width: 828px) {
    height: 50px;
  }
`

export const Title = styled.div`
  margin-left: 10px;
  font-size: 18px;
  line-height: 1;
  color: ${theme.colors.secondary};

  span {
    font-style: italic;
    font-weight: 700;
  }
`

export const SubTitle = styled.div`
  margin-left: 10px;
  font-size: 40px;
  font-weight: 700;

  @media only screen and (max-width: 828px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 30px;
  }

  @media only screen and (min-width: 1517px) {
    font-size: 38px;
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
  height: 34px;
  line-height: 1;

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

  @media only screen and (max-width: 8 space-between28px) {
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
    margin-left: 0px;
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
