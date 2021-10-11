import styled from 'styled-components'
import { theme } from '../../styles/theme'
export const Container = styled.div`
  vertical-align: middle;
`
export const FreeTestContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const FreeTestText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const FreeTestLeft = styled.h2`
  display: flex;

  font-size: 2rem;
  color: ${theme.colors.primary};
`
export const FreeTestSpan = styled.span`
  display: flex;

  font-size: 2rem;

  font-weight: 700;
  color: ${theme.colors.primary};
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2vw 0 0 3vw;
  @media (max-width: 900px) {
    padding-left: 0;
  }
`
export const PipeFreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const PipeFree = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
