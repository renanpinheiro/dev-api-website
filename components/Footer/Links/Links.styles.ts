import styled from 'styled-components'

export const ContainerLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;

  > a {
    padding-bottom: 10px;
    margin: 0;
    margin-bottom: 5px;
    font-size: 1rem;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: ${props => props.theme.colors.secondary};
      text-decoration: none;
    }

    @media only screen and (max-width: 828px) {
      width: auto;
      margin-top: 15px;
    }
  }
`
export const TitleLink = styled.p`
  padding-bottom: 26px;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};

  @media only screen and (max-width: 828px) {
    width: auto;
    margin-top: 15px;
  }
`
