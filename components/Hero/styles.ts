import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const Logo = styled.div`
  margin-bottom: 3rem;

  > svg {
    width: 500px;
  }
`

export const Title = styled.h1`
  font-weight: normal;
  font-size: 5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  line-height: 120%;
`

export const Description = styled.p`
  font-weight: normal;
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  max-width: 40%;
`
