import styled from 'styled-components'
import { theme } from '../../styles/theme'

interface ColProps {
  content?: string
}

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;

  background-color: #221e1e;
  padding: 90px 60px 70px 60px;

  @media only screen and (max-width: 828px) {
    padding-right: 20px 15px;
  }
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 828px) {
    justify-items: flex-start;
  }
`
export const Col = styled.div<ColProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.content};
  align-items: flex-start;

  @media only screen and (max-width: 828px) {
    padding-top: 20px;

    flex-direction: column;
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
      font-weight: 700;
      font-style: italic;
    }
  }
`

export const Newsletter = styled.div`
  padding: 15px 0 0 10px;
  display: flex;
  flex-direction: row;
  padding: 10px;
`

export const Pipe = styled.div`
  width: 3px;

  background-color: ${theme.colors.secondary};
`

export const ResponsivePipe = styled.div`
  @media only screen and (max-width: 828px) {
    background-color: ${theme.colors.secondary};
    width: 100%;
    height: 3px;
    margin: 7px 0 15px 0;
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
  color: ${theme.colors.secondary};
  font-size: 18px;
  margin-left: 10px;
  line-height: 1;

  span {
    font-weight: 700;
    font-style: italic;
  }
`

export const SubTitle = styled.div`
  margin-left: 10px;
  font-weight: 700;
  font-size: 40px;

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
    height: auto;
    flex-direction: column;
  }
`

export const Address = styled.div`
  font-size: 18px;
  color: white;
  margin-left: 10px;

  span {
    font-weight: 700;
    font-style: italic;
  }
  @media only screen and (max-width: 828px) {
    font-size: 16px;
    margin: 0;
    margin-bottom: 15px;
  }

  @media only screen and (max-width: 1366px) {
    font-size: 16px;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;

  @media only screen and (max-width: 8 space-between28px) {
    justify-content: center;
  }
`

export const SocialMedia = styled.p`
  color: ${theme.colors.secondary};
  font-size: 18px;
  margin-left: 10px;
  line-height: 1;
  margin: 0;

  span {
    font-weight: 700;
    font-style: italic;
  }
  @media only screen and (max-width: 828px) {
    font-size: 16px;
    margin-left: 0px;
  }
`

export const SocialLogocontainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`

export const SocialMediaLogo = styled.img`
  width: 40px;
  height: 40px;

  margin-left: 15px;

  @media only screen and (max-width: 828px) {
    margin-left: 10px;
  }
`
