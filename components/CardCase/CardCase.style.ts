import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: initial;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 5vh 8vw 5vh 8vw;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 415px) {
    justify-content: center;
  }
`
export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-top: 2vh;
  vertical-align: bottom;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  box-shadow: 0 4px 25px #5f47ff29;

  @media (max-width: 1600px) {
    width: 30vw;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2vh 2vw 2vh 2vw;
  font-size: 2vh;
  font-weight: 900;

  @media (max-width: 1600px) {
    font-size: 1.2rem;
  }
`
export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2vw 3vh 2vw;
  font-size: 2vh;
  line-height: 1.5;

  @media (max-width: 1600px) {
    font-size: 1.2rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 50%;
  height: 50%;
  padding: 1vh 2vw 5vh 2vw;

  @media (max-width: 1024px) {
    padding: 0 2vw 3vh 2vw;
  }

  @media (max-width: 600px) {
    padding: 1vh 2vw 5vh 2vw;
  }
`
