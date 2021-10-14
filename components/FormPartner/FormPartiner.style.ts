import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;

  padding: 1vh;
`
export const TitleContainer = styled.h2`
  padding-bottom: 3vh;
  font-size: 3.5vh;
  font-weight: 700;
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`
export const InputColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
`
export const InputColumn = styled.div`
  flex: 0 0 49%;
  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`
