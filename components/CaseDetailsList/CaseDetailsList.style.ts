import styled from 'styled-components'

import { theme } from '../../styles/theme'
import { IBorderCase } from './CaseDetailsList.interface'

export const Container = styled.div<IBorderCase>`
  display: flex;
  width: 100%;
  padding-top: 10vh;
  padding-bottom: 8vh;
  border-bottom: ${props => (props.hasBorder ? '1px solid #e2e8f0' : 'none')};

  @media (max-width: 768px) {
    padding-top: 1vh;
  }
`
export const ContainerColuns = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Pipe = styled.div`
  width: 5vw;
  height: 3px;
  margin-bottom: 5px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 5vh;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 600px) {
    padding-bottom: 2vh;
  }
`
export const TitleText = styled.h2`
  font-size: 3rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
