import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
export const Title = styled.div`
  width: 100%;
  padding-bottom: 3vh;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media (min-width: 1366px) {
    padding: 0 5rem 0 5rem;
  }
`

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  padding-bottom: 2vh;
  margin: 0 25px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media (max-width: 1024px) {
    width: 100px;
    margin: 0 25px;
  }

  > img {
    width: 100%;
    height: 70px;
    pointer-events: none;
    object-fit: contain;
  }
`
