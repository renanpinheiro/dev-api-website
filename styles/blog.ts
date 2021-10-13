import {
  FormControl,
  InputGroup,
  Button as BootstrapButton,
} from 'react-bootstrap'

import styled from 'styled-components'

import { theme } from './theme'

interface ICaseStyle {
  imageUrl: string
}

interface ICaseTypeProps {
  width?: string
  height?: string
}

interface ISidebarStyle {
  height?: string
}

interface IIconStyle {
  width?: string
  height?: string
}

interface ITextContainerStyle {
  margin?: string
}

interface ITextStyle {
  fontSize?: string
}

interface IButtonStyle {
  img?: string
  hoverImg?: string
}

export const Container = styled.div`
  width: 100vw;
`

export const ImageContainer = styled.div`
  position: relative;
  height: 90vh;
`

export const ImageCarouselItems = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const ImageHeaderContainer = styled.div<ICaseStyle>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;

  padding: 12vh 12.5vw;

  background-image: url(${props => props.imageUrl});
  background-size: cover;

  @media only screen and (max-width: 770px) {
    padding: 12vh 9vw;
  }
`

export const Title = styled.p`
  margin-top: 20px;

  font-size: 3.3rem;
  font-weight: 700;
  line-height: 1;
  color: white;

  @media only screen and (max-width: 770px) {
    font-size: 2rem;
  }
`

export const CaseType = styled.div<ICaseTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : '80px')};
  height: ${props => (props.height ? props.height : '35px')} !important;
  padding-top: 2px;

  margin-right: 10px;

  font-size: calc(${props => props.height} / 2);
  font-weight: 600;
  color: white;

  background-color: ${theme.colors.secondary};

  border-radius: 5px;
`

export const Pipe = styled.div`
  width: 130px;
  height: 3px !important;
  background-color: ${theme.colors.secondary};
`

export const SidebarCotainer = styled.div<ISidebarStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: ${props => (props.height ? props.height : '60px')} !important;
`

export const User = styled.div<IIconStyle>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  margin-right: 10px;

  img {
    width: ${props => (props.width ? props.width : '20px')};
    height: ${props => (props.height ? props.height : '20px')};
  }
  p {
    padding-top: 3px;
    margin: 0;
    margin-left: 10px;
    font-size: calc(${props => props.height} / 1.5);
    line-height: 1;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`

export const Date = styled.div<IIconStyle>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  margin-right: 10px;

  img {
    width: ${props => (props.width ? props.width : '20px')};
    height: ${props => (props.height ? props.height : '20px')};
  }
  p {
    padding-top: 3px;
    margin: 0;
    margin-left: 10px;
    font-size: calc(${props => props.height} / 1.5);
    line-height: 1;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    max-width: 100%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) {
    max-width: 90rem;
  }
`

export const Content = styled.div`
  width: 63%;

  @media (min-width: 320px) and (max-width: 992px) {
    width: 100%;
  }
`

export const CasesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 150px auto 50px auto;

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0px 20px;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) {
    max-width: 90rem;
  }
`

export const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 15rem;

  @media (min-width: 320px) and (max-width: 992px) {
    align-items: center;
    max-width: 18rem;
  }
`

export const TextContainer = styled.div<ITextContainerStyle>`
  position: relative;
  display: flex;
  justify-content: space-between;

  margin: ${props => (props.margin ? props.margin : '15px 0px 0px 0px')};

  @media (min-width: 320px) and (max-width: 992px) {
    align-items: center;
    margin-top: 5px;
    margin-left: 16px;
  }
`

export const VerticalPipe = styled.div`
  position: absolute;
  left: 0;
  width: 3px !important;
  height: 100%;

  background-color: ${theme.colors.secondary};
`

export const Text = styled.div<ITextStyle>`
  display: -webkit-box;

  padding-top: 2px;
  margin-left: 10px;

  overflow: hidden;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};

  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.colors.primary};
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  span {
    font-weight: 500;
  }

  @media (min-width: 320px) and (max-width: 992px) {
    margin-left: 10px;
    font-size: 1.3rem;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const FilterContainer = styled.div`
  position: absolute;

  top: 89%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 180px;

  @media (min-width: 320px) and (max-width: 992px) {
    height: auto;
  }
`

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 10px 60px;

  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 6px 28px #2c2d6636;

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    max-width: 100%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) {
    max-width: 90rem;
  }
`

export const InputFormControl = styled(FormControl)`
  height: 55px;
  text-transform: lowercase;
  background: #eff3f6;
  border: none;

  &:focus {
    background: #eff3f6;
    box-shadow: none;
  }
`
export const InputContainer = styled(InputGroup)`
  width: 40%;

  @media only screen and (max-width: 828px) {
    width: 100%;
  }
`

export const SearchIcon = styled.img`
  width: 34px;
  height: 22px;
`

export const ButtonInput = styled(BootstrapButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border: none;

  :active {
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }

  :hover {
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: 828px) {
    font-size: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 828px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const IconButton = styled.div<IButtonStyle>`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const Button = styled.button<IButtonStyle>`
  display: flex;
  height: 55px;

  padding: 17px;
  margin-right: 15px;

  font-weight: 700;
  color: ${theme.colors.primary};
  border: none;
  border-radius: 3px;

  :hover {
    color: ${theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};

    > div {
      background-image: url(${props => props.hoverImg}) !important;
    }
  }

  @media only screen and (max-width: 828px) {
    padding: 18px 14px;
    margin-right: 0px;
  }
`

export const DateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px !important;
  font-size: 1rem;
  font-weight: 700;

  line-height: 1;
  color: ${theme.colors.white};

  background-color: ${theme.colors.secondary};
  border-radius: 10px;

  span {
    margin-bottom: -5px;
    font-size: 2rem;
  }
`

export const ReturnButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 233px;
  height: 49px;

  margin-bottom: 30px;

  cursor: pointer;
  border-radius: 10px;

  box-shadow: 0px 6px 28px #2c2d6636;

  span {
    padding-top: 2px;

    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.primary};

    @media only screen and (max-width: 828px) {
      font-size: 1.3rem;
    }
  }

  img {
    width: 25px;
    height: 20px;

    margin-right: 10px;

    transform: rotateY(180deg);
  }

  :hover {
    transform: scale(0.98);
  }

  @media only screen and (max-width: 828px) {
    width: 100%;
  }
`

export const Paragraph = styled.p`
  font-size: 20px;
  color: ${theme.colors.primary};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TextPipe = styled.div`
  width: 100px;
  height: 3px;

  margin-top: 30px;
  margin-bottom: 12px;

  background-color: ${theme.colors.secondary};
`

export const NewsTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  color: ${theme.colors.primary};
`
