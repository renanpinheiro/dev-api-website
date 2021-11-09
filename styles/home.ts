import styled from 'styled-components'
import { theme } from './theme'

export const Hero = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 8vw 0 8vw;
  background-color: ${theme.colors.gray[100]};
  background-image: url('/masks/lines.svg');
  background-repeat: no-repeat;
  background-position-y: 140%;
  background-size: 100%;

  @media (max-width: 996px) {
    flex-direction: column-reverse;
    padding: 15vh 8vw 0 8vw;
  }
`

export const HeroContent = styled.div`
  z-index: 24;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 45%;
  height: 100%;

  @media (max-width: 576px) {
    align-items: flex-start;
    text-align: left;
    background-size: 100%;
  }

  @media (max-width: 996px) {
    z-index: 20;
    width: 100%;
  }

  > h1 {
    max-width: 20ch;
    margin-bottom: 15px;
    font-size: 2.625rem;

    @media (max-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.75rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 90%;
    margin-bottom: 30px;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 90%;
    }
  }
`

export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const GifContainer = styled.div`
  width: 54%;

  @media (max-width: 900px) {
    width: 100%;
  }

  > video {
    width: 100%;
  }
`

export const Content = styled.section`
  width: 100%;
`

export const Carrousel = styled.section`
  width: 100%;
  padding: 10vh 5.5vw 6vh;
  background-size: 100%;
`

export const CarrouselTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;

  > h2 {
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    @media (max-width: 576px) {
      margin-top: 10px;
    }

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    > b {
      font-weight: 700;
    }
  }
`

export const Quote = styled.div`
  padding: 15vh 3vw 5vh 5vw;
`

export const PlatformContainer = styled.div`
  display: flex;
  padding: 10vh 8vw;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Platform = styled.div`
  width: 50%;

  @media (max-width: 996px) {
    width: 100%;
    margin-bottom: 30px;
  }

  > h2 {
    max-width: 20ch;
    margin-bottom: 15px;
    font-size: 2.25rem;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    span {
      font-weight: 700;
    }
  }

  > p {
    max-width: 50ch;
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 90%;
      font-size: 1.375rem;
    }
  }
`

export const PlatformDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vh;
`

export const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12vh;
  height: 12vh;
  padding: 1vw;
  background: transparent linear-gradient(225deg, #5f47ff -80%, #ffffff 60%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const DetailsText = styled.div`
  margin-left: 20px;

  > p {
    margin-bottom: 1vh;
    font-size: 3vh;
  }

  > span {
    font-size: 4vh;
    font-weight: 700;
    color: ${theme.colors.green[100]};
  }
`

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 8vw;
  text-align: center;
  background-color: ${theme.colors.gray[100]};
  background-image: url('/masks/devapi.svg');
  background-position-y: top;
  background-size: auto;

  > h2 {
    margin-bottom: 15px;
    font-size: 2.25rem;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    b {
      font-weight: 700;
    }
  }

  > p {
    max-width: 120ch;
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 25vw;
  height: 20vw;
  padding: 2vw;
  margin: 1vw;
  text-align: left;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 25px #5f47ff29;

  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
    padding: 3vh;
    margin: 0;
    margin-bottom: 2vh;
  }

  > h3 {
    font-size: 1.125rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.2;

    @media (max-width: 996px) {
      font-size: 2.5vh;
    }

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }
`

export const ConnectorsContainer = styled.div`
  img {
    width: 3.5vw;
    height: 100%;
    margin-right: 10px;
    box-shadow: 0px 10px 25px #5f47ff29;

    @media (max-width: 900px) {
      width: 6vh;
    }
  }
`

export const Invisible = styled.div`
  width: 2px;
  height: 4vw;

  @media (max-width: 900px) {
    height: 6vh;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 8vw 0 8vw;
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 8vw 0 8vw;
  text-align: center;

  > h2 {
    font-size: 2.25rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }
  }

  > p {
    max-width: 120ch;
    margin-top: 2vh;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 65vw;
  margin-top: 7vh;

  @media (max-width: 996px) {
    width: 100%;
  }

  @media (min-width: 1600px) {
    width: 51vw;
  }
`

export const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2vh 7vh;
  text-align: left;

  @media (max-width: 996px) {
    align-items: flex-start;
    margin: 0 0 7vh;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vh;
  height: 8vh;
  background-color: ${theme.colors.gray[100]};
  border-radius: 5px;

  @media (max-width: 996px) {
    width: 13vh;
    height: 10vh;
  }

  img {
    width: 60%;
    height: 100%;
    padding: 2px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 15px;
  font-size: 1.25rem;

  > p {
    max-width: 28ch;
    margin: 0;
    line-height: 1.2;
  }

  > b {
    margin-bottom: 10px;
    font-weight: 700;
  }
`

export const CallToActionContainer = styled.div`
  padding: 0 8vw 10vh 8vw;
`
