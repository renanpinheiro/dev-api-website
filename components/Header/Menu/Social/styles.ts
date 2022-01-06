import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 17%;
  bottom: 25%;
  z-index: 1082;
  display: block;
  width: 40px;

  @media (max-width: 992px) {
    display: none;
  }

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    > li {
      padding: 10px;

      > a {
        color: ${props => props.theme.colors.primary};
        transition: all 0.2s;

        &:hover {
          color: ${props => props.theme.colors.secondary};
        }

        > svg {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
`
