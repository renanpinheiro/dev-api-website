import styled from 'styled-components'

interface IMarginProps {
  margin?: string
}
export const PrivacyPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: auto;

  @media (max-width: 992px) {
    padding-top: 6.25rem;
  }

  @media (min-width: 1200px) {
    padding-top: 7.813rem;
  }
`

export const HeroUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 41vh;
  text-align: center;
  background-image: url('/backgrounds/bg-privacy-policy.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media only screen and (max-width: 2560px) and (max-height: 1600px) {
    height: 29vh;
  }

  @media only screen and (max-width: 2560px) and (max-height: 1440px) {
    height: 32vh;
  }

  @media only screen and (max-width: 1920px) {
    height: 32vh;
  }

  @media only screen and (max-width: 1440px) {
    height: 29vh;
  }

  @media only screen and (max-width: 1366px) {
    height: 41vh;
  }

  @media only screen and (max-width: 1280px) {
    height: 30vh;
  }

  @media only screen and (max-width: 1024px) {
    height: 13vh;
  }

  @media only screen and (max-width: 760px) {
    height: 30vh;
    background-image: url('/backgrounds/bg-policy-privacy-mobile.svg');
  }

  & > hr {
    align-self: center;
    width: 131px;
    height: 3px;
    margin-bottom: 5px;
    background-color: ${props => props.theme.colors.white};
    opacity: 1;

    @media only screen and (max-width: 760px) {
      width: 90px;
    }
  }

  & > h1 {
    font-size: 3.75rem;
    color: ${props => props.theme.colors.white};

    @media only screen and (max-width: 760px) {
      font-size: 1.75rem;
    }
  }
`
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 85px 0px;

  @media only screen and (max-width: 760px) {
    margin: 45px 0px;
  }

  .RowDescription {
    display: flex;
  }
`
export const TitleDescription = styled.div<IMarginProps>`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 15px auto;

  & > span {
    margin-bottom: 5px;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 26px;
    color: ${props => props.theme.colors.primary};

    @media only screen and (max-width: 1024px) {
      width: 80%;
      margin: auto;
    }
  }

  & > p {
    width: 100%;
    font-size: 1.25rem;
    line-height: 26px;
    color: ${props => props.theme.colors.primary};

    @media only screen and (max-width: 1024px) {
      width: 80%;
      margin: auto;
    }

    & > b {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 26px;
      color: #2c2d66;
    }

    & > ul {
      margin: 15px 20px;
      list-style: none;

      > li {
        padding-bottom: 5px;
      }
    }

    & > ol {
      > li {
        padding-bottom: 5px;

        & > ol {
          & > li {
            padding-bottom: 5px;
          }
        }
      }
    }
  }

  & > ul {
    margin: ${props => props.margin};
    list-style: none;

    & > span {
      margin-bottom: 10px;
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 26px;
      color: #2c2d66;
    }

    & > p {
      margin-top: 10px;
      & > span {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 26px;
        color: #2c2d66;
      }
    }
  }

  & > ul p {
    width: 100%;
    font-size: 1.25rem;
    line-height: 26px;
    color: #2c2d66;

    @media only screen and (max-width: 1024px) {
      width: 80%;
      margin: auto;
    }
  }
`
