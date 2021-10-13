import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const SideBar = styled.div`
  width: 34%;

  @media (min-width: 320px) and (max-width: 992px) {
    width: 100%;
  }
`

export const Ebook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 500px;
  margin-bottom: 50px;

  border-radius: 15px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    border-radius: 15px;
  }
`

export const NewsForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const SubText = styled.span`
  color: #b7b7b7;
  line-height: 1;
  padding: 6px 60px 30px 60px;
`
export const TagsContainer = styled.div``

export const Pipe = styled.div`
  width: 46px;
  height: 3px;
  background-color: ${theme.colors.secondary};
`

export const Title = styled.div`
  color: ${theme.colors.primary};
  font-weight: 700;
  font-size: 22px;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
`

export const Tag = styled.div`
  height: 39px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 13px;

  border-radius: 10px;
  background-color: #f6f6ff;

  margin: 5px;

  color: ${theme.colors.primary};
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`
export const ArticleContainer = styled.div``

export const Article = styled.div`
  width: 100%;
  height: 137px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  box-shadow: 0px 6px 28px #2c2d6636;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    transform: scale(0.99);
  }
`

export const Image = styled.img`
  max-width: 30%;
  height: 137px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const TextContainer = styled.div`
  padding: 0 25px;

  @media only screen and (max-width: 770px) {
    padding: 0 15px;
  }
`

export const Text = styled.p`
  line-height: 1;
  font-size: 22px;
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 770px) {
    font-size: 20px;
  }
`

export const VerticalPipe = styled.div`
  width: 3px;
  height: 60%;
  background-color: ${theme.colors.primary};
`
export const SidebarCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const Newspaper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 14px;
    height: 14px;
  }
  p {
    color: #c9c9c9;
    margin: 0;
    margin: 0 5px;
    line-height: 1;
    padding-top: 2px;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
export const Date = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 14px;
    height: 14px;
  }
  p {
    color: #c9c9c9;
    margin: 0;
    margin: 0 5px;
    line-height: 1;
    padding-top: 2px;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
export const Message = styled.div`
  > small {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.green};
  }
`
