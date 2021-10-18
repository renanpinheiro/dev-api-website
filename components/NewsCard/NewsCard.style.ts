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
  grid-template-columns: ${props =>
    props.gridColum ? props.gridColum : '400px 80px'};
  grid-template-rows: ${props =>
    props.gridRow ? props.gridRow : '250px 275px 80px'};
  grid-template-areas:
    'IG IG'
    'TX TX'
    'SB BT';

  box-shadow: 0px 6px 28px #2c2d6636;
  border-radius: 15px;

  @media only screen and (max-width: 450px) {
    grid-template-columns: 255px 80px;
    grid-template-rows: 200px 300px 80px;
    grid-template-areas:
      'IG IG'
      'TX TX'
      'SB BT';
  }

  @media only screen and (min-width: 770px) {
    grid-template-columns: 250px 80px;
    grid-template-rows: 200px 300px 80px;
  }
  @media only screen and (min-width: 1700px) {
    grid-template-columns: 300px 80px;
  }
  @media (min-width: 1701px) and (max-width: 2000px) {
    grid-template-columns: 460px 80px;
  }
`
export const Image = styled.div`
  grid-area: IG;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`

export const TextContainer = styled.div`
  grid-area: TX;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1;
  color: ${props => props.theme.colors.primary};
  margin-top: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 770px) {
    font-size: 1.3rem;
  }
`
export const Text = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.primary};
  margin: 0;
  line-height: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 770px) {
    font-size: 1.1rem;
  }
`

export const SidebarCotainer = styled.div`
  grid-area: SB;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #e5e5e5;
`
export const ButtonContainer = styled.div`
  grid-area: BT;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  border-bottom-right-radius: 15px;
`
export const Newspaper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }
  p {
    color: #c9c9c9;
    margin: 0;
    margin-left: 10px;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
export const Date = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 20px;
    height: 20px;
  }
  p {
    color: #c9c9c9;
    margin: 0;
    margin-left: 10px;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
