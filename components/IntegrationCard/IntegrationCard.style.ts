import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  height: 14vh;
  padding: 7vh 2vw;
  margin-bottom: 20px;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0 10px 25px #5f47ff29;
  opacity: 1;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  width: 9vh;
  height: 9vh;
  background: #fff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  box-shadow: 0 10px 25px #5f47ff29;
  opacity: 1;
`
export const ConnectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ConnectorImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
export const BallContainer = styled.div`
  width: 30%;
`
export const ContainerDevApiLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  box-shadow: 0 0 15px #5f47ff33;
`
export const LittleBallImage = styled.img`
  object-fit: cover;
  width: 100%;
`
export const DevApiLogoImage = styled.img`
  width: 21px;
`
