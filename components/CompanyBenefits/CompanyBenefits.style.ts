import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  @media (max-width: 900px) {
    align-items: center;
  }
`

export const Image = styled.img`
  object-fit: cover;
  padding: 0.5px;

  @media (max-width: 900px) {
    object-fit: cover;
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
`

export const Text = styled.p`
  padding-left: 0.5vw;
  overflow: hidden;
  font-size: 1.325rem;
  line-height: 1.5;

  @media (max-width: 900px) {
    text-align: left;
  }
`
