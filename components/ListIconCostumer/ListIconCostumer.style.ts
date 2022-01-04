import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
export const TitleContainer = styled.div`
  width: 100%;
  padding-bottom: 3vh;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`
export const ListImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`
export const ImageContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  width: 130px !important;
  margin: 0 25px;
  padding-bottom: 2vh;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  @media (max-width: 1024px) {
    width: 100px !important;
    margin: 0 25px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 90px;
  pointer-events: none;
  object-fit: contain;
`
