import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 13vh 0 10vh 0;
`

export const FormContainer = styled.div`
  z-index: 13;
  display: flex;
  flex-direction: column;
  width: 38vw;

  @media (max-width: 1600px) {
    width: 50vw;
  }
  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 900px) {
    width: 84vw;
  }
`
