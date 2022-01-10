import styled from 'styled-components'

import { IContainerStyledProps, IGridStyledProps } from './NewsCard.interface'

export const Container = styled.div<IContainerStyledProps>`
  padding: ${props => (props.padding ? props.padding : '25px')};

  > a {
    text-decoration: none;
  }
`

export const Grid = styled.div<IGridStyledProps>`
  display: grid !important;
  grid-template-areas:
    'IG IG'
    'TX TX'
    'SB BT';
  grid-template-rows: ${props =>
    props.gridRow ? props.gridRow : '250px 275px 80px'};
  grid-template-columns: ${props =>
    props.gridColum ? props.gridColum : '400px 80px'};
  border-radius: 15px;
  box-shadow: 0 6px 28px #2c2d6636;

  @media only screen and (max-width: 450px) {
    grid-template-areas:
      'IG IG'
      'TX TX'
      'SB BT';
    grid-template-rows: 200px 300px 80px;
    grid-template-columns: 255px 80px;
  }

  @media only screen and (min-width: 770px) {
    grid-template-rows: 200px 300px 80px;
    grid-template-columns: 250px 80px;
  }

  @media only screen and (min-width: 1700px) {
    grid-template-columns: 300px 80px;
  }

  @media (min-width: 1701px) and (max-width: 2000px) {
    grid-template-columns: 460px 80px;
  }
`
export const Image = styled.div`
  display: flex;
  grid-area: IG;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: TX;
  justify-content: flex-start;
  padding: 5%;

  @media only screen and (max-width: 550px) {
    min-width: 70%;
  }
`

export const Pipe = styled.div`
  width: 100px;
  height: 3px;
  background-color: ${props => props.theme.colors.secondary};
`

export const Title = styled.p`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin-top: 15px;
  overflow: hidden;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.colors.primary};
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 770px) {
    font-size: 1.3rem;
  }
`
export const Text = styled.p`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 1.3rem;
  line-height: 1;
  color: ${props => props.theme.colors.primary};
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 770px) {
    font-size: 1.1rem;
  }
`

export const SidebarCotainer = styled.div`
  display: flex;
  grid-area: SB;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #e5e5e5;
`
export const ButtonContainer = styled.div`
  display: flex;
  grid-area: BT;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary};
  border-bottom-right-radius: 15px;
`
export const Newspaper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin: 0;
    margin-left: 10px;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  height: 100%;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    margin: 0;
    margin-left: 10px;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
