import Slider from 'react-slick'

import styled from 'styled-components'
export const Container = styled.div``

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 6vw;
  height: auto;
  margin: 4vw 2.5vh 0;

  @media (max-width: 768px) {
    width: 22vw;
    margin: 3vw;
  }

  @media (max-width: 996px) {
    width: 22vw;
    margin: 4vw;
  }

  > img {
    width: 100%;
    height: 100%;
    margin-bottom: 2vh;
    border-radius: 8px;
    border-image: initial;
    box-shadow: rgb(86 57 254 / 15%) 0 5px 40px;
  }

  > span {
    width: 100%;
    overflow: hidden;
    font-size: 0.75rem;
    text-align: center;
    white-space: nowrap;
  }
`

export const Carrousel = styled(Slider)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
