import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const ContainerLink = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  > a {
    margin: 0;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.white};
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    font-size: 20px;
    padding-bottom: 20px;

    &:hover {
      color: ${props => props.theme.colors.secondary};
      text-decoration: none;
    }
    @media only screen and (max-width: 828px) {
      width: auto;
      margin-top: 15px;
    }
  }
`
export const TitleLink = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 26px;

  @media only screen and (max-width: 828px) {
    width: auto;
    margin-top: 15px;
  }
`
