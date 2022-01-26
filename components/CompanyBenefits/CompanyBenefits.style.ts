import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`

export const Point = styled.div`
  min-width: 10px;
  min-height: 10px;
  margin: 0 10px;
  background-color: #5f47ff;
  border-radius: 50px;
  box-shadow: 0 0 0 5px #b3a7ff, 0 0 0 10px #eae6ff;

  @media (max-width: 900px) {
    min-width: 10px;
    min-height: 10px;
    margin-right: 15px;
  }
`

export const Text = styled.p`
  padding-left: 0.5vw;
  overflow: hidden;
  font-size: 1.325rem;
  line-height: 1.5;

  @media (max-width: 900px) {
    font-size: 1.2rem;
    text-align: left;
  }
`
