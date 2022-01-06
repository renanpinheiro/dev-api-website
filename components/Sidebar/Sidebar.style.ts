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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  margin-bottom: 50px;
  cursor: pointer;
  border-radius: 15px;

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
  padding: 6px 60px 30px 60px;
  line-height: 1;
  color: #b7b7b7;
`
export const TagsContainer = styled.div``

export const Pipe = styled.div`
  width: 46px;
  height: 3px;
  background-color: ${theme.colors.secondary};
`

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${theme.colors.primary};
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  padding: 13px;
  margin: 5px;
  color: ${theme.colors.primary};
  cursor: pointer;
  background-color: #f6f6ff;
  border-radius: 10px;

  :hover {
    transform: scale(1.1);
  }
`
export const ArticleContainer = styled.div``

export const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 137px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 6px 28px #2c2d6636;

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
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 22px;
  line-height: 1;
  text-overflow: ellipsis;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  img {
    width: 14px;
    height: 14px;
  }

  p {
    padding-top: 2px;
    margin: 0;
    margin: 0 5px;
    line-height: 1;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  img {
    width: 14px;
    height: 14px;
  }

  p {
    padding-top: 2px;
    margin: 0;
    margin: 0 5px;
    line-height: 1;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`
export const Message = styled.div`
  padding-bottom: 30px;

  > small {
    font-size: 1.25rem;
    color: ${theme.colors.green[200]};
  }
`
